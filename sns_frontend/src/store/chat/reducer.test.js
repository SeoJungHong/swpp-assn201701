import { initialState } from './selectors'
import reducer from './reducer'
import { GET_CHATROOM_LIST_SUCCESS, GET_MESSAGES_SUCCESS } from './actions'

const state = {
  chatlist: [{chatroomnum:2},{chatroomnum:1}],
  texts: [],
}

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
  expect(reducer(undefined, { type: 'test' })).toEqual(initialState)
})

it('GET_CHATROOM_LIST_SUCCESS', ()=>{
  expect(
    reducer(initialState,{
      type: GET_CHATROOM_LIST_SUCCESS,
      chatrooms: {chatroom:1}
    })
  ).toEqual(
    {
      chatlist: {chatroom:1},
      messages: [],
      partnerId: 0,
      partnerName: null
    }
  )
})

it('GET_MESSAGES_SUCCESS', ()=>{
  expect(
    reducer(initialState,{
      type: GET_MESSAGES_SUCCESS,
      partnerId:1,
      partnerName:"haley",
      messages: "hi"
    })
  ).toEqual(
    {
      chatlist: [],
      messages: "hi",
      partnerId: 1,
      partnerName: "haley"
    }
  )
})
