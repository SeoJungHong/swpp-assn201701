import { initialState } from './selectors'
import { GET_TIMELINE_LIST_SUCCESS, GET_TIMELINE_DETAIL_REQUEST, GET_TIMELINE_DETAIL_SUCCESS, EXPAND_LIMIT } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TIMELINE_LIST_SUCCESS:
      console.log('[reducers] GET_TIMELINE_LIST_SUCCESS', action.timelines)
      return Object.assign({}, state, {
        timelines: action.timelines,
      })
    case GET_TIMELINE_DETAIL_REQUEST:
      return Object.assign({}, state, {
        detail: null, // 이렇게 이전 내용을 삭제하지 않으면 이미 본 내용 잔상이 남음.
      })
    case GET_TIMELINE_DETAIL_SUCCESS:
      console.log('[reducers] GET_TIMELINE_DETAIL_SUCCESS', action.timeline)
      return Object.assign({}, state, {
        detail: action.timeline,
        limit:20
      })
    case EXPAND_LIMIT:
      console.log('[reducer] EXPAND_LIMIT', state.limit)
      return Object.assign({}, state, {
        limit: state.limit+10,
      })
    default:
      return state
  }
}
