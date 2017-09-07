// https://github.com/diegohaz/arc/wiki/Selectors
export const initialState = {
  token: null,
  user: null,
}

export const getToken = (state = initialState) => state.token
export const getUser = (state = initialState) => state.user
