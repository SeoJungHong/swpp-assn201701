export const SEARCH_USER = 'SEARCH_USER'
export const SEARCH_USER_SUCCESS = 'SEARCH_USER_SUCCESS'
export const ENTER_WALL = 'ENTER_WALL'
export const VIEW_CATEGORY = 'VIEW_CATEGORY'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'

export const searchUser = (searchname) => ({
  type: SEARCH_USER,
  searchname,
})

export const searchUserSuccess = (searchlist) => ({
  type: SEARCH_USER_SUCCESS,
  searchlist,
})

export const enterWall = (targetuser) => ({
  type: ENTER_WALL,
  targetuser,
})

export const viewCategory = (category) => ({
  type: VIEW_CATEGORY,
  category,
})

export const updateUserSuccess = (user) => ({
  type: UPDATE_USER_SUCCESS,
  user,
})
