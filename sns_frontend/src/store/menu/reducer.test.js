import { initialState } from './selectors'
import reducer from './reducer'
import { SEARCH_USER_SUCCESS, ENTER_WALL, VIEW_CATEGORY, UPDATE_USER_SUCCESS } from './actions'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
  expect(reducer(undefined, { type: 'test' })).toEqual(initialState)
})

it('ENTER_WALL', ()=>{
  expect(
    reducer(initialState,{
      type: ENTER_WALL,
      targetuser: "user"
    })
  ).toEqual({
    category: null,
    content: null,
    searchlist: [],
    targetuser: "user"
  })
})

it('SEARCH_USER_SUCCESS', ()=>{
  expect(
    reducer(initialState,{
      type: SEARCH_USER_SUCCESS,
      searchlist: ["search"]
    })
  ).toEqual({
    category: null,
    content: null,
    searchlist: ["search"],
    targetuser: null
  })
})

it('VIEW_CATEGORY', ()=>{
  expect(
    reducer(initialState,{
      type: VIEW_CATEGORY,
      category: "category",
      targetuser: null,
    })
  ).toEqual({
    category: "category",
    content: null,
    searchlist: [],
    targetuser: null
  })
})

it('UPDATE_USER_SUCCESS', ()=>{
  expect(
    reducer(initialState,{
      type: UPDATE_USER_SUCCESS,
      user: "user",
    })
  ).toEqual({
    category: null,
    content: null,
    searchlist: [],
    targetuser: "user"
  })
})
