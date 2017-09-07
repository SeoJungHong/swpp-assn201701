import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import { hostUrl } from 'config'
import * as actions from './actions'
import { getAuthToken } from '../auth'

const chatUrl = `${hostUrl}/chats/`

function* searchUser(data) {
  console.log('searchUser IN SAGAS', data)
  try {
    const response = yield call(api.get, chatUrl, {
      headers: {
        Authorization: `Token ${getAuthToken()}`,
        'Content-Type': 'application/json',
      },
    })
    const users = []
    for (let i = 0; i < response.length; i += 1) {
      if (response[i].username.includes(data)) {
        users.push(response[i])
      }
    }
    console.log('searchUser succeeded', users)
    yield put(actions.searchUserSuccess(users))
  } catch (e) {
    console.log('searchUser failed', e)
  }
}

function* watchSearchUser() {
  while (true) {
    const data = yield take(actions.SEARCH_USER)
    yield call(searchUser, data.searchname)
  }
}

export default function* () {
  yield fork(watchSearchUser)
}
