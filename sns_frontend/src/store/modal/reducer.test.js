import { initialState } from './selectors'
import reducer from './reducer'
import { MODAL_SHOW, MODAL_HIDE } from './actions'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual({})
  expect(reducer(undefined, { type: 'test' })).toEqual({})
})

it('MODAL_SHOW', ()=>{
  expect(
    reducer(initialState,{
      type: MODAL_SHOW,
      name: "modal"
    })
  ).toEqual(
    {
      modal: true
    }
  )
})

it('MODAL_HIDE', ()=>{
  expect(
    reducer(initialState,{
      type: MODAL_HIDE,
      name: "modal"
    })
  ).toEqual(
    {
      modal: false
    }
  )
  expect(
    reducer(initialState,{
      type: MODAL_HIDE,
      name: false
    })
  ).toEqual(
    {}
  )
})
