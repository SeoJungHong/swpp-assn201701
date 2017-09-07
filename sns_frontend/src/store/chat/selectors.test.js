import * as selectors from './selectors'

const state = {
  chatlist: [{chatroomnum:2},{chatroomnum:1}],
  messages: [],
  partnerId: 0,
  partnerName: null,
}

it('initialState', () => {
  expect(selectors.initialState).toEqual(
    {
      chatlist: [],
      messages: [],
      partnerId: 0,
      partnerName: null
    }
  )
})


it('getList', () => {
  expect(selectors.getList({})).toEqual([])
  expect(selectors.getList()).toEqual([])
  expect(selectors.getList(state)).toEqual(state.chatlist)
})

it('getChatMessages', () => {
  expect(selectors.getChatMessages({})).toEqual([])
  expect(selectors.getChatMessages()).toEqual([])
  expect(selectors.getChatMessages(state)).toEqual(state.messages)
})

it('getPartnerId', () => {
  expect(selectors.getPartnerId({})).toEqual(0)
  expect(selectors.getPartnerId()).toEqual(0)
  expect(selectors.getPartnerId(state)).toEqual(state.partnerId)
})

it('getPartnerName', () => {
  expect(selectors.getPartnerName({})).toEqual(null)
  expect(selectors.getPartnerName()).toEqual(null)
  expect(selectors.getPartnerName(state)).toEqual(state.partnerName)
})
