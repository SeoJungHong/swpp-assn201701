export const initialState = {
  content: null,
  searchlist: [],
  targetuser: null,
  category: null,
}

export const getContent = (state = initialState) => state.content || initialState.content

export const getSearchlist = (state = initialState) => state.searchlist || initialState.searchlist

export const getTargetuser = (state = initialState) => state.targetuser || initialState.targetuser

export const getCategory = (state = initialState) => state.category || initialState.category
