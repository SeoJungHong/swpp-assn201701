import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Feed, TimelineUnit, Button } from 'components'
import { SearchForm } from 'containers'
import { palette } from 'styled-theme'

const Wrapper = styled.div`
  & > * {
    margin: 2rem;
  }
`

const TimelineList = ({ timelines, category, loading, user, targetUser, requestFollow, limit, expandLimit, ...props }) => {
  let filtered = []
  let detailFiltered = []
  let noMoreTimeline = false
  let privateFlag = false
  console.log('[component]', timelines)
  filtered = timelines
  if (targetUser) {
    for (let i = 0; i < filtered.length; i += 1) {
      if (filtered[i].writer === targetUser.username) {
        detailFiltered.push(filtered[i])
      }
    }
  } else if (category) {
    for (let j = 0; j < filtered.length; j += 1) {
      if (filtered[j].category) {
        const timelineCategory = JSON.parse(filtered[j].category)
        for (let i = 0; i < timelineCategory.length; i += 1) {
          if (timelineCategory[i] === category) {
            detailFiltered.push(filtered[j])
          }
        }
      }
    }
  } else {
    detailFiltered = filtered
  }
  let timelinelist = detailFiltered.slice(0,limit)
  if (limit >= detailFiltered.length) {
    noMoreTimeline = true
  }
  return (
    <Wrapper {...props}>
      {!targetUser && !category && <SearchForm />}
      {targetUser && <Feed user={user} targetUser={targetUser} requestFollow={requestFollow} />}
      {timelinelist.map(timeline => <TimelineUnit key={timeline.id} user={user} timeline={timeline} />)}
      <Button palette="black" style={{width:"100%"}} disable={noMoreTimeline} onClick={(() => expandLimit())}> More </Button>
    </Wrapper>
  )
}

TimelineList.propTypes = {
  timelines: PropTypes.arrayOf(PropTypes.object).isRequired,
  category: PropTypes.string,
  loading: PropTypes.bool,
  user: PropTypes.object,
  targetUser: PropTypes.object,
  requestFollow: PropTypes.func.isRequired,
  expandLimit: PropTypes.func,
  limit:PropTypes.number,
}

export default TimelineList
