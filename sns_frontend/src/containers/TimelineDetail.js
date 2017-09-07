import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromTimeline, fromLogin } from 'store/selectors'
import { getTimelineDetail, postLike, postReply, deleteTimeline } from 'store/actions'
import { TimelineDetail } from 'components'


class TimelineDetailContainer extends Component {
  static propTypes = {
    timelineId: PropTypes.string.isRequired,
    timeline: PropTypes.object,
    user: PropTypes.object,
    getTimelineDetail: PropTypes.func.isRequired,
    deleteTimeline: PropTypes.func.isRequired,
    postLike: PropTypes.func.isRequired,
    postReply: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getTimelineDetail(this.props.timelineId)
  }

  render() {
    const { timeline, user, deleteTimeline, postLike, postReply } = this.props
    if (!timeline) {
      return <h2>Loading...</h2>
    }
    return <TimelineDetail {...{ timeline, user, deleteTimeline, postLike, postReply }} />
  }
}

const mapStateToProps = state => ({
  timeline: fromTimeline.getDetail(state),
  user: fromLogin.getUser(state),
})

const mapDispatchToProps = (dispatch) => {
  return {
    getTimelineDetail: (timelineId) => dispatch(getTimelineDetail(timelineId)),
    deleteTimeline: (timelineId) => dispatch(deleteTimeline(timelineId)),
    postLike: (timelineId, cancel) => dispatch(postLike(timelineId, cancel)),
    postReply: (timelineId, reply) => dispatch(postReply(timelineId, reply)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelineDetailContainer)
