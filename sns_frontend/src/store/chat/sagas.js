import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import { hostUrl } from 'config'
import { delay } from 'redux-saga'
import * as actions from './actions'
import { modalShow } from '../modal/actions'
import { getAuthToken } from '../auth'

const chatUrl = `${hostUrl}/chats/`
const chatMessagesUrl = (partnerId) => {
  return `${hostUrl}/chats/${partnerId}/`
}
const chatSubmitUrl = (partnerId) => {
  return `${hostUrl}/chats/${partnerId}/submit/`
}

let Chaton = false
let Chatlist = false

export function* getChatroomList() {
  console.log('getChatroomList in SAGA')
  Chatlist = true
  while (Chatlist) {
    try {
      const response = yield call(api.get, chatUrl, {
        headers: {
          Authorization: `Token ${getAuthToken()}`,
          'Content-Type': 'application/json',
        },
      })
      console.log('get chatroom succeeded', response)
      yield put(actions.getChatroomSuccess(response))
    } catch (e) {
      console.log('get chatroom failed', e)
    }
    yield call(delay, 3000)
  }
}

export function* getMessages(data) {
  console.log('getMessages in SAGA', data)
  Chaton = true
  Chatlist = false
  while (Chaton) {
    try {
      const response = yield call(api.get, chatMessagesUrl(data.partnerId), {
        headers: {
          Authorization: `Token ${getAuthToken()}`,
          'Content-Type': 'application/json',
        },
      })
      console.log('getMessages succeeded', response)
      yield put(actions.getMessagesSuccess(data.partnerId, data.partnerName, response))
      yield put(modalShow('chat'))
    } catch (e) {
      console.log('getMessages failed', e)
    }
    yield call(delay, 1000)
  }
}

export function* submitChat(data) {
  console.log('submit chat in SAGAS', data)
  try {
    const response = yield call(api.post, chatSubmitUrl(data.partnerId), { message: data.message }, {
      headers: {
        Authorization: `Token ${getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    })
    console.log('chat/{pk}/submit post succeeded', response)
    yield put(actions.submitChatSuccess(response))
  } catch (e) {
    console.log('chat/{pk}/submit post failed ', e)
  }
}

export function* watchGetChatrooms() {
  while (true) {
    yield take(actions.GET_CHATROOM_LIST_REQUEST)
    yield call(getChatroomList)
  }
}

export function* watchGetMessages() {
  while (true) {
    const data = yield take(actions.GET_MESSAGES_REQUEST)
    yield call(getMessages, data)
  }
}

export function* watchSubmitChat() {
  while (true) {
    const data = yield take(actions.SUBMIT_CHAT_REQUEST)
    yield call(submitChat, data)
  }
}

export function* watchCloseRoomAction() {
  while (true) {
    yield take(actions.CLOSE_CHATROOM)
    Chaton = false
    yield put(modalShow('UserList'))
    //yield call(getChatroomList)
  }
}

export function* watchCloseListAction() {
  while (true) {
    yield take(actions.CLOSE_CHATROOM_LIST)
    Chatlist = false
  }
}

export default function* () {
  yield fork(watchGetChatrooms)
  yield fork(watchGetMessages)
  yield fork(watchSubmitChat)
  yield fork(watchCloseRoomAction)
  yield fork(watchCloseListAction)
}
