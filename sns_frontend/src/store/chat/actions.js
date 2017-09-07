export const GET_CHATROOM_LIST_REQUEST = 'GET_CHATROOM_LIST_REQUEST'
export const GET_CHATROOM_LIST_SUCCESS = 'GET_CHATROOM_LIST_SUCCESS'

export const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST'
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS'

export const SUBMIT_CHAT_REQUEST = 'SUBMIT_CHAT_REQUEST'
export const SUBMIT_CHAT_SUCCESS = 'SUBMIT_CHAT_SUCCESS'

export const CLOSE_CHATROOM = 'CLOSE_CHATROOM'
export const CLOSE_CHATROOM_LIST = 'CLOSE_CHATROOM_LIST'

export const getChatroomList = () => ({
  type: GET_CHATROOM_LIST_REQUEST,
})

export const getChatroomSuccess = (chatrooms) => ({
  type: GET_CHATROOM_LIST_SUCCESS,
  chatrooms,
})

export const getMessages = (partnerId, partnerName) => ({
  type: GET_MESSAGES_REQUEST,
  partnerId,
  partnerName,
})

export const getMessagesSuccess = (partnerId, partnerName, messages) => ({
  type: GET_MESSAGES_SUCCESS,
  partnerId,
  partnerName,
  messages,
})

export const submitChat = (partnerId, message) => ({
  type: SUBMIT_CHAT_REQUEST,
  partnerId,
  message,
})

export const submitChatSuccess = (partnerId, chatMessage) => ({
  type: SUBMIT_CHAT_SUCCESS,
  partnerId,
  chatMessage,
})

export const closeChatroom = () => ({
  type: CLOSE_CHATROOM,
})

export const closeChatroomList = () => ({
  type: CLOSE_CHATROOM_LIST,
})
