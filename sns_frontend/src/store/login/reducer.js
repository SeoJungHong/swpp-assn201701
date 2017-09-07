import { initialState } from './selectors'
import { USER_ENTERED, LOGOUT, UPDATE_MY_INFO } from './actions'
import { removeAuthToken } from '../auth'

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_ENTERED:
      return {
        ...state,
        token: action.token,
        user: action.user,
      }
    case LOGOUT:
      removeAuthToken()
      return {
        ...state,
        token: initialState.token,
        user: initialState.user,
      }
    case UPDATE_MY_INFO:
      return {
        ...state,
        user: action.user,
      }
    default:
      return state
  }
}
