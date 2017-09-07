import { initialState } from './selectors'
import { GET_CHATROOM_LIST_SUCCESS, GET_MESSAGES_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHATROOM_LIST_SUCCESS:
      return Object.assign({}, state, {
        chatlist: action.chatrooms,
      })
    case GET_MESSAGES_SUCCESS:
      console.log('[reducer]', action.partnerId, action.messages)
      return Object.assign({}, state, {
        partnerId: action.partnerId,
        partnerName: action.partnerName,
        messages: action.messages,
      })
    default:
      return state
  }
}
