import { initialState } from './selectors'
import { SEARCH_USER_SUCCESS, ENTER_WALL, VIEW_CATEGORY, UPDATE_USER_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case ENTER_WALL:
      console.log('[reducer] ENTER_WALL', action.targetuser)
      return {
        ...state,
        targetuser: action.targetuser,
        category: null,
      }
    case SEARCH_USER_SUCCESS:
      console.log('[reducer] SEARCH_USER_SUCCESS', action.searchlist)
      return {
        ...state,
        searchlist: action.searchlist,
      }
    case VIEW_CATEGORY:
      console.log('[reducer] VIEW_CATEGORY', action.category)
      return {
        ...state,
        category: action.category,
        targetuser: null,
      }
    case UPDATE_USER_SUCCESS:
      console.log('[reducer] UPDATE_USER_SUCCESS', action.user)
      return {
        ...state,
        targetuser: action.user,
        category: null,
      }
    default:
      return state
  }
}
