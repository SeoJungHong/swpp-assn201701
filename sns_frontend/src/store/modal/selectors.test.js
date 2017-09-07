import * as selectors from './selectors'

const modalState ={
  login: true
}

it('initialState', () => {
  expect(selectors.initialState).toEqual({})
})

it('isOpen', () => {
  expect(selectors.isOpen({})).toEqual(false)
  expect(selectors.isOpen()).toEqual(false)
  expect(selectors.isOpen(modalState,'login')).toEqual(true)
})
