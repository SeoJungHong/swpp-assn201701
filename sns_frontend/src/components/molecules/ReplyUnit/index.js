import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Article = styled.article`
  background-color: #A1D6E2;
  padding: 1rem;
  margin: 1rem;
`

const ReplyUnit = ({ reply }) => {
  return (
    <Article >
      <b>{reply.user.username}</b> : {reply.message} ({reply.created})
    </Article>
  )
}

ReplyUnit.propTypes = {
  reply: PropTypes.object.isRequired,
}

export default ReplyUnit
