import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import { hostUrl } from 'config'
import * as actions from './actions'
import { getAuthToken } from '../auth'
import { updateUserSuccess } from '../menu/actions'

const followUrl = `${hostUrl}/users/follow`
const userUrl = `${hostUrl}/users/`

export function* postFollow(data) {
  console.log('[saga] postFollow', data.targetUser.username)
  try {
    if (data.userFollowing) {
      yield call(fetch, followUrl, {
        method: 'DELETE',
        headers: {
          Authorization: `Token ${getAuthToken()}`,
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({ username: data.targetUser.username }),
      })
      console.log('[saga] postFollow user delete succeeded')
      yield put(actions.updateUser(data.targetUser))
    } else {
      yield call(api.post, followUrl, { username: data.targetUser.username }, {
        headers: {
          Authorization: `Token ${getAuthToken()}`,
          'Content-Type': 'application/json',
        },
      })
      console.log('[saga] postFollow user post succeeded')
    }
    yield put(actions.updateUser(data.targetUser))
  } catch (e) {
    console.log('[saga] postFollow failed', e)
  }
}

export function* updateUser(data) {
  console.log('[saga] updateUser', data.user.username)
  try {
    const response = yield call(api.get, userUrl, {
      headers: {
        Authorization: `Token ${getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    })
    let targetUser = data.user
    for (let i = 0; i < response.length; i += 1) {
      if (response[i].username === data.user.username) {
        targetUser = response[i]
      }
    }
    yield put(updateUserSuccess(targetUser))
  } catch (e) {
    console.log('[saga] updateUser failed', e)
  }
}

export function* watchRequestFollow() {
  while (true) {
    const data = yield take(actions.FOLLOW_REQUEST)
    yield call(postFollow, data)
  }
}

export function* watchUpdateUser() {
  while (true) {
    const data = yield take(actions.UPDATE_USER)
    yield call(updateUser, data)
  }
}

export default function* () {
  yield fork(watchRequestFollow)
  yield fork(watchUpdateUser)
}
