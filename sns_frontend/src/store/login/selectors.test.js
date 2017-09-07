import * as selectors from './selectors'

const State ={
  token: "this is token",
  user: null
}

it('initialState', () => {
  expect(selectors.initialState).toEqual({token:null,user:null})
})


it('getToken', () => {
  expect(selectors.getToken()).toEqual(null)
  expect(selectors.getToken(State)).toEqual(State.token)
})

it('getUser', () => {
  expect(selectors.getUser()).toEqual(null)
  expect(selectors.getUser(State)).toEqual(State.user)
})
