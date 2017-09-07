import * as selectors from './selectors'

it('initialState', () => {
  expect(selectors.initialState).toEqual({
    timelines: [],
    limit: 20,
    detail: null,
  })
})

it('getList', () => {
  expect(selectors.getList({})).toEqual([])
  expect(selectors.getList()).toEqual([])
  expect(selectors.getList(selectors.initialState.timelines)).toEqual([])
})

it('getDetail', () => {
  expect(selectors.getDetail({})).toEqual(null)
  expect(selectors.getDetail()).toEqual(null)
  expect(selectors.getDetail(selectors.initialState)).toEqual(null)
})
