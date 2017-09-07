export const POST_TIMELINE_REQUEST = 'POST_TIMELINE_REQUEST'
export const POST_TIMELINE_SUCCESS = 'POST_TIMELINE_SUCCESS'

export const GET_TIMELINE_LIST_REQUEST = 'GET_TIMELINE_LIST_REQUEST'
export const GET_TIMELINE_LIST_SUCCESS = 'GET_TIMELINE_LIST_SUCCESS'

export const GET_TIMELINE_DETAIL_REQUEST = 'GET_TIMELINE_DETAIL_REQUEST'
export const GET_TIMELINE_DETAIL_SUCCESS = 'GET_TIMELINE_DETAIL_SUCCESS'

export const POST_LIKE_REQUEST = 'POST_LIKE_REQUEST'
export const POST_LIKE_REQUEST_SUCCESS = 'POST_LIKE_REQUEST_SUCCESS'

export const POST_REPLY_REQUEST = 'POST_REPLY_REQUEST'
export const POST_REPLY_REQUEST_SUCCESS = 'POST_REPLY_REQUEST_SUCCESS'

export const DELETE_TIMELINE_REQUEST = 'DELETE_TIMELINE_REQUEST'
export const DELETE_TIMELINE_REQUEST_SUCCESS = 'DELETE_TIMELINE_REQUEST_SUCCESS'

export const GENERAL_API_FAILURE = 'GENERAL_API_FAILURE'

export const EXPAND_LIMIT = 'EXPAND_LIMIT'

export const postTimeline = (data, resolve, reject) => ({
  type: POST_TIMELINE_REQUEST,
  data,
  resolve,
  reject,
})

export const postTimelineSuccess = (timeline) => ({
  type: POST_TIMELINE_SUCCESS,
  timeline,
})

export const getTimelineList = (limit) => ({
  type: GET_TIMELINE_LIST_REQUEST,
  limit,
})

export const getTimelineListSuccess = (timelines) => ({
  type: GET_TIMELINE_LIST_SUCCESS,
  timelines,
})

export const getTimelineDetail = (timelineId) => ({
  type: GET_TIMELINE_DETAIL_REQUEST,
  timelineId,
})

export const getTimelineDetailSuccess = (timeline) => ({
  type: GET_TIMELINE_DETAIL_SUCCESS,
  timeline,
})

export const postLike = (postId, cancel) => ({
  type: POST_LIKE_REQUEST,
  postId,
  cancel,
})

export const postLikeSuccess = (timeline) => ({
  type: POST_LIKE_REQUEST_SUCCESS,
  timeline,
})

export const postReply = (postId, message) => ({
  type: POST_REPLY_REQUEST,
  postId,
  message,
})

export const postReplySuccess = (timeline) => ({
  type: POST_REPLY_REQUEST_SUCCESS,
  timeline,
})

export const generalApiFailure = error => ({
  type: GENERAL_API_FAILURE,
  error,
})

export const deleteTimeline = (postId) => ({
  type: DELETE_TIMELINE_REQUEST,
  postId,
})

export const deleteTimelineSuccess = () => ({
  type: DELETE_TIMELINE_REQUEST_SUCCESS,
})

export const expandLimit = () => ({
  type: EXPAND_LIMIT,
})
