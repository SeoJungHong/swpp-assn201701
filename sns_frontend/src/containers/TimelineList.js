import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromTimeline, fromLogin, fromStatus, fromMenu } from 'store/selectors'
import { getTimelineList, GET_TIMELINE_LIST, requestFollow, expandLimit } from 'store/actions'

import { TimelineList } from 'components'

class TimelineListContainer extends Component {
  static propTypes = {
    timelines: PropTypes.arrayOf(PropTypes.object).isRequired,
    category: PropTypes.string,
    loading: PropTypes.bool,
    user: PropTypes.object,
    targetUser: PropTypes.object,
    getTimelineList: PropTypes.func.isRequired,
    requestFollow: PropTypes.func.isRequired,
    expandLimit: PropTypes.func,
    limit: PropTypes.number,
  }

  static defaultProps = {
    limit: 20,
  }

  componentWillMount() {
    this.props.getTimelineList()
  }

  render() {
    const { timelines, category, loading, user, targetUser, requestFollow, limit, expandLimit } = this.props
    return <TimelineList {...{ timelines, category, loading, user, targetUser, requestFollow, limit, expandLimit }} />
  }
}

const mapStateToProps = state => ({
  timelines: fromTimeline.getList(state),
  category: fromMenu.getCategory(state),
  loading: fromStatus.isLoading(state, GET_TIMELINE_LIST),
  user: fromLogin.getUser(state),
  targetUser: fromMenu.getTargetuser(state),
  limit: fromTimeline.getLimit(state),
})

const mapDispatchToProps = (dispatch, { limit }) => ({
  getTimelineList: () => dispatch(getTimelineList(limit)),
  requestFollow: (user, userFollowing) => dispatch(requestFollow(user, userFollowing)),
  expandLimit: () => dispatch(expandLimit()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TimelineListContainer)
