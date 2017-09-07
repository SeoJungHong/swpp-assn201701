export const initialState = {
  timelines: [],
  detail: null,
  limit: 20,
}

export const getList = (state = initialState) => state.timelines || initialState.timelines
export const getDetail = (state = initialState) => state.detail || initialState.detail
export const getLimit = (state = initialState) => state.limit || initialState.limit
