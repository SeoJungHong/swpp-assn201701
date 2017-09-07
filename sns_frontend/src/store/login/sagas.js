import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import { hostUrl } from 'config'
import * as actions from './actions'
import { updateUser } from '../feed/actions'
import { getAuthToken, setAuthToken, getUser } from '../auth'

const loginUrl = `${hostUrl}/users/login/`
const signupUrl = `${hostUrl}/users/signup/`
const mypageUrl = `${hostUrl}/users/mypage/`
const userUrl = `${hostUrl}/users/`

let userID = ""

export function* adjustUser(data) {
  console.log('[post] MYPAGE', data)
  try {
    const response = yield call(api.post, mypageUrl, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${getAuthToken()}`,
      },
    })
    yield put(actions.adjustSuccess(response.token, response.user))
    setAuthToken(response.token, JSON.stringify(response.user))
    console.log('post Mypage success')
  } catch (e) {
    console.log('post Mypage failed')
  }
}

export function* postLogin(data) {
  console.log('[post] /users/login', data)
  try {
    const response = yield call(api.post, loginUrl, data)
    console.log('postLogin succeeded', response.user.username)
    yield put(actions.loginSuccess(response.token, response.user))
    userID = response.user.username
    setAuthToken(response.token, JSON.stringify(response.user))
  } catch (e) {
    console.log('postLogin failed')
  }
}

export function* postSignup(data) {
  console.log('[post] /users/signup', data)
  try {
    const response = yield call(api.post, signupUrl, data)
    console.log('postSignup succeeded')
    yield put(actions.signupSuccess(response.token, response.user))
    setAuthToken(response.token, JSON.stringify(response.user))
  } catch (e) {
    console.log('postLogin failed')
  }
}

export function* checkAuth() {
  const token = yield call(getAuthToken) // retrieve from local storage
  if (token) {
    console.log('token already exists', token)
    const user = yield call(getUser)
    yield put(actions.userEntered(token, user))
  }
}

export function* watchLogin() {
  while (true) {
    const { data } = yield take(actions.LOGIN_REQUEST)
    yield call(postLogin, data)
  }
}

export function* watchSignup() {
  while (true) {
    const { data } = yield take(actions.SIGNUP_REQUEST)
    yield call(postSignup, data)
  }
}

export function* watchAuthSuccess() {
  while (true) {
    const { token, user } = yield take([actions.LOGIN_REQUEST_SUCCESS, actions.SIGNUP_REQUEST_SUCCESS, actions.ADJUST_REQUEST_SUCCESS])
    yield put(actions.userEntered(token, user))
  }
}

export function* watchAdjust() {
  while (true) {
    const data = yield take(actions.ADJUST_REQUEST)
    yield call(adjustUser, data)
  }
}
export default function* () {
  yield fork(checkAuth)
  yield fork(watchLogin)
  yield fork(watchSignup)
  yield fork(watchAuthSuccess)
  yield fork(watchAdjust)
}
