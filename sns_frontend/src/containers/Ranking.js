import React from 'react'
import { connect } from 'react-redux'
import { Ranking } from 'components'
import { fromTimeline, fromLogin } from 'store/selectors'

const RankingContainer = props => <Ranking {...props} />

const mapStateToProps = state => ({
  user: fromLogin.getUser(state),
  timelines: fromTimeline.getList(state),
})

export default connect(mapStateToProps, null)(RankingContainer)
