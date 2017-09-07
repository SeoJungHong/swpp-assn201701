import { initialState } from './selectors'
import reducer from './reducer'
import { USER_ENTERED, LOGOUT } from './actions'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
  expect(reducer(undefined, { type: 'test' })).toEqual(initialState)
})

it('USER_ENTERED', ()=>{
  expect(
    reducer(initialState,{
      type: USER_ENTERED,
      token: "token"
    })
  ).toEqual(
    {
      token: "token"
    }
  )
})

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  removeItem() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key];
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }
};
global.localStorage = new LocalStorageMock;


it('LOGOUT', ()=>{
  expect(
    reducer(initialState,{
      type: LOGOUT,
    })
  ).toEqual(
    {
      token: null,
      user: null
    }
  )
})
