import { initialState } from './selectors'
import reducer from './reducer'
import { EXPAND_LIMIT, GET_TIMELINE_LIST_SUCCESS, GET_TIMELINE_DETAIL_REQUEST, GET_TIMELINE_DETAIL_SUCCESS } from './actions'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
  expect(reducer(undefined, { type: 'test' })).toEqual(initialState)
})

it('get timeline list success', ()=>{
  expect(
    reducer(initialState,{
      type: GET_TIMELINE_LIST_SUCCESS,
      timelines: [{
        id:0,
        text:"test"
      }]
    })
  ).toEqual(
    {
      detail: null,
      limit: 20,
      timelines: [{"id": 0, "text": "test"}]
    })
})

it('GET_TIMELINE_DETAIL_REQUEST', ()=>{
  expect(
    reducer(initialState,{
      type: GET_TIMELINE_DETAIL_REQUEST,
      detail: null,
    })
  ).toEqual({
    detail: null,
    limit: 20,
    timelines: []
  })
})

it('GET_TIMELINE_DETAIL_SUCCESS', ()=>{
  expect(
    reducer(initialState,{
      type: GET_TIMELINE_DETAIL_SUCCESS,
      timeline: "timeline",
    })
  ).toEqual({
    detail: "timeline",
    limit: 20,
    timelines: []
  })
})

it('EXPAND_LIMIT', ()=>{
  expect(
    reducer(initialState,{
      type: EXPAND_LIMIT,
      timeline: "timeline",
    })
  ).toEqual({
    detail: null,
    limit: 30,
    timelines: []
  })
})
