export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS'
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_REQUEST_SUCCESS = 'SIGNUP_REQUEST_SUCCESS'
export const USER_ENTERED = 'USER_ENTERED'
export const USER_ENTERED_SUCCESS = 'USER_ENTERED_SUCCESS'
export const LOGOUT = 'LOGOUT'
export const ADJUST_REQUEST = 'ADJUST_REQUEST'
export const ADJUST_REQUEST_SUCCESS = 'ADJUST_REQUEST_SUCCESS'
export const UPDATE_MY_INFO = 'UPDATE_MY_INFO'

export const adjust = (email) => ({
  type: ADJUST_REQUEST,
  email,
})

export const adjustSuccess = (token, user) => ({
  type: ADJUST_REQUEST_SUCCESS,
  token,
  user,
})

export const userEnteredSuccess = () => ({
  type: USER_ENTERED_SUCCESS,
})
export const login = (data, resolve, reject) => ({
  type: LOGIN_REQUEST,
  data,
  resolve,
  reject,
})

export const loginSuccess = (token, user) => ({
  type: LOGIN_REQUEST_SUCCESS,
  token,
  user,
})

export const signup = (data, resolve, reject) => ({
  type: SIGNUP_REQUEST,
  data,
  resolve,
  reject,
})

export const signupSuccess = (token, user) => ({
  type: SIGNUP_REQUEST_SUCCESS,
  token,
  user,
})

export const userEntered = (token, user) => ({
  type: USER_ENTERED,
  token,
  user,
})

export const logout = () => ({ type: LOGOUT })

export const updateMyInfo = (user) => ({
  type: UPDATE_MY_INFO,
  user,
})
