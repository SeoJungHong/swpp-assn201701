export const initialState = {
  chatlist: [],
  messages: [],
  partnerId: 0,
  partnerName: null,
}

export const getList = (state = initialState) => state.chatlist || initialState.chatlist
export const getChatMessages = (state = initialState) => state.messages || initialState.messages
export const getPartnerId = (state = initialState) => state.partnerId || initialState.partnerId
export const getPartnerName = (state = initialState) => state.partnerName || initialState.partnerName
