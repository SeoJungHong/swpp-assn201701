import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Heading, Link } from 'components'

const StyledLink = styled(Link)`
  display:block;
  text-decoration: none;
  background-color: #F1F1F2;
  border: 2px solid #1995AD;
  padding: 1rem;
  &:hover {
    background-color: #DCDCEA;
    cursor:pointer;
    text-decoration: none;
  }
`

const TimelineUnit = ({ user, timeline }) => {
  let category = null
  let privacy = false
  if (timeline.category) {
    category = JSON.parse(timeline.category)
  }
  if (timeline.private === "private"){
    privacy = true
  }
  return (
    <StyledLink to={user && `/detail/${timeline.id}`}>
      <Heading>{timeline.title}</Heading>
      <Heading level={3}>by {timeline.writer}</Heading>
      {category && <Heading level={3}>Category : {category.join(', ')}</Heading>}
      {privacy && <Heading level={3}>Only followers can read</Heading>}
      <Heading level={3}>{timeline.price} P</Heading>
    </StyledLink>
  )
}

TimelineUnit.propTypes = {
  user: PropTypes.object,
  timeline: PropTypes.object.isRequired,
}

export default TimelineUnit
