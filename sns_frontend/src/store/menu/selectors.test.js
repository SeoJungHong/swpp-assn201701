import * as selectors from './selectors'

const state = {
  content: "timeline",
  searchlist: ["search"],
  targetuser: "user",
  category: "category",
}

it('initialState', () => {
  expect(selectors.initialState).toEqual({
    content: null,
    searchlist: [],
    targetuser: null,
    category: null,
  })
})

it('getContent', () => {
  expect(selectors.getContent({})).toEqual(null)
  expect(selectors.getContent()).toEqual(null)
  expect(selectors.getContent(state)).toEqual(state.content)
})

it('getSearchlist', () => {
  expect(selectors.getSearchlist({})).toEqual([])
  expect(selectors.getSearchlist()).toEqual([])
  expect(selectors.getSearchlist(state)).toEqual(state.searchlist)
})

it('getTargetuser', () => {
  expect(selectors.getTargetuser({})).toEqual(null)
  expect(selectors.getTargetuser()).toEqual(null)
  expect(selectors.getTargetuser(state)).toEqual(state.targetuser)
})

it('getCategory', () => {
  expect(selectors.getCategory({})).toEqual(null)
  expect(selectors.getCategory()).toEqual(null)
  expect(selectors.getCategory(state)).toEqual(state.category)
})
