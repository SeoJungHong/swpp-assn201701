import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import { hostUrl } from 'config'
import * as actions from './actions'
import { getAuthToken } from '../auth'
import { enterWall } from '../menu/actions'
import { userEntered } from '../login/actions'

const timelineUrl = (timelineId) => {
  let url = `${hostUrl}/timelines/`
  if (timelineId) {
    url += `${timelineId}/`
  }
  return url
}
const likeUrl = (postId) => {
  return `${hostUrl}/timelines/${postId}/like/`
}
const replyUrl = (postId) => {
  return `${hostUrl}/timelines/${postId}/reply/`
}
const deleteUrl = (postId) => {
  return `${hostUrl}/timelines/${postId}`
}
const clickUrl = (postId) => {
  return `${hostUrl}/timelines/${postId}/click/`
}

export function* getTimelines() {
  console.log('[get] /timelines')
  try {
    const timelines = yield call(api.get, timelineUrl(null), {
      headers: {
        Authorization: `Token ${getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    })
    yield put(actions.getTimelineListSuccess(timelines))
  } catch (e) {
    yield put(actions.generalApiFailure(e))
  }
}

export function* getTimelineDetail(timelineId) {
  console.log(`'[get] /timelines/${timelineId}/`)
  try {
    const timeline = yield call(api.get, timelineUrl(timelineId), {
      headers: {
        Authorization: `Token ${getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    })
    yield put(actions.getTimelineDetailSuccess(timeline))
  } catch (e) {
    yield put(actions.generalApiFailure(e))
  }
}

export function* putClick(timelineId) {
  console.log(`[put] /timelines/${timelineId}/click`)
  try {
    yield call(api.put, clickUrl(timelineId), {
      headers: {
        Authorization: `Token ${getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    })
    console.log('timeline click succeeded')
    yield call(getTimelineDetail, timelineId)
  } catch (e) {
    console.log('timeline click failed', e)
  }
}

export function* postLike(data) {
  console.log(`'[post] /timelines/${data.postId}/like`)
  try {
    const timeline = yield call(api.put, likeUrl(data.postId), { cancel: data.cancel }, {
      headers: {
        Authorization: `Token ${getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    })
    console.log('like post succeeded', timeline)
    yield put(actions.postLikeSuccess(timeline))
  } catch (e) {
    console.log('like post or cancel failed', e)
    yield put(actions.generalApiFailure(e))
  }
}


export function* postReply(data) {
  console.log(`[post] /timelines/${data.postId}/reply`)
  try {
    const timeline = yield call(api.post, replyUrl(data.postId), data, {
      headers: {
        Authorization: `Token ${getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    })
    console.log('reply post succeeded', timeline)
    yield put(actions.postReplySuccess(timeline))
  } catch (e) {
    console.log('timeline post failed', e)
    yield put(actions.generalApiFailure(e))
  }
}

export function* postTimeline(data) {
  console.log('[post] /timelines', data)
  try {
    if(data.files){
      const FileReaderFunction=(resolve)=>{
        var reader = new window.FileReader();
        reader.readAsDataURL(data.files[0]);
        reader.onloadend = function() {
          var base64 = reader.result;
          data.base64 = base64
          resolve()
        }
      }
      yield new Promise((resolve,reject)=>{FileReaderFunction(resolve)})
    }
    const response = yield call(api.post, timelineUrl(null), data, {
      headers: {
        Authorization: `Token ${getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    })
    console.log('timeline post succeeded', response)
    alert('Posting Succeeded!')
    yield put(actions.postTimelineSuccess(response))
  } catch (e) {
    console.log('timeline post failed', e)
    yield put(actions.generalApiFailure(e))
  }
}

export function* deleteTimeline(data) {
  console.log('[delete] /timelines', deleteUrl(data.postId))
  try {
    yield call(api.delete, deleteUrl(data.postId), {
      headers: {
        Authorization: `Token ${getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    })
    console.log('timeline delete succeeded')
    yield put(actions.deleteTimelineSuccess())
  } catch (e) {
    console.log('timeline delete failed', e)
  }
}

export function* watchGetTimelineList() {
  while (true) {
    yield take([actions.GET_TIMELINE_LIST_REQUEST, actions.POST_TIMELINE_SUCCESS, actions.DELETE_TIMELINE_REQUEST_SUCCESS, userEntered])
    yield call(getTimelines)
  }
}

export function* watchGetTimelineDetail() {
  while (true) {
    const { timelineId } = yield take(actions.GET_TIMELINE_DETAIL_REQUEST)
    yield call(putClick, timelineId)
  }
}

export function* watchUpdateTimelineDetail() {
  while (true) {
    const { timeline } = yield take([actions.POST_LIKE_REQUEST_SUCCESS, actions.POST_REPLY_REQUEST_SUCCESS])
    yield call(getTimelineDetail, timeline.id)
  }
}

export function* watchTimelinePosting() {
  while (true) {
    const { data } = yield take(actions.POST_TIMELINE_REQUEST)
    yield call(postTimeline, data)
  }
}

export function* watchLikePosting() {
  while (true) {
    const data = yield take(actions.POST_LIKE_REQUEST)
    yield call(postLike, data)
  }
}

export function* watchReplyPosting() {
  while (true) {
    const data = yield take(actions.POST_REPLY_REQUEST)
    yield call(postReply, data)
  }
}

export function* watchDeleteTimeline() {
  while (true) {
    const data = yield take(actions.DELETE_TIMELINE_REQUEST)
    yield call(deleteTimeline, data)
  }
}

export default function* () {
  yield fork(watchGetTimelineList)
  yield fork(watchGetTimelineDetail)
  yield fork(watchUpdateTimelineDetail)
  yield fork(watchTimelinePosting)
  yield fork(watchLikePosting)
  yield fork(watchReplyPosting)
  yield fork(watchDeleteTimeline)
}
