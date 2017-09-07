export const FOLLOW_REQUEST = 'FOLLOW_REQUEST'
export const FOLLOW_REQUEST_SUCCESS = 'FOLLOW_REQUEST_SUCCESS'
export const UPDATE_USER = 'UPDATE_USER'

export const requestFollow = (targetUser, userFollowing) => ({
  type: FOLLOW_REQUEST,
  targetUser,
  userFollowing,
})

export const requestFollowSuccess = () => ({
  type: FOLLOW_REQUEST_SUCCESS,
})

export const updateUser = (user) => ({
  type: UPDATE_USER,
  user,
})
