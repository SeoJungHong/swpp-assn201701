// https://github.com/diegohaz/arc/wiki/Selectors
import find from 'lodash/find'
import pick from 'lodash/pick'

export const initialState = {
  loading: {},
  error: {},
}

const getIn = (state, prefix) => {
  if (typeof prefix === 'undefined') {
    return !!find(state, (value) => !!value)
  } else if (Array.isArray(prefix)) {
    return !!find(pick(state, prefix), (value) => !!value)
  } else if (Object.prototype.hasOwnProperty.call(state, prefix)) {
    return !!state[prefix]
  }
  return false
}

export const getLoadingState = (state = initialState) => state.loading || {}
export const getErrorState = (state = initialState) => state.error || {}
export const isLoading = (state, prefix) => getIn(getLoadingState(state), prefix)
export const hasError = (state, prefix) => getIn(getErrorState(state), prefix)
