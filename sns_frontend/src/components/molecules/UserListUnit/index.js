import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Heading, Button } from 'components'

const Article = styled.article`
  background-color: #eef3d8;
  padding: 1rem;
`

const UserListUnit = ({ user, startChat, enterWall }) => {
  return (
    <Article>
      <Heading level={3}>{user.username}</Heading>
      <Button onClick={() => startChat(user.id, user.username)}>Message</Button>
      <Button onClick={() => enterWall(user)}>Enter Wall</Button>
    </Article>
  )
}

UserListUnit.propTypes = {
  user: PropTypes.object.isRequired,
  startChat: PropTypes.func.isRequired,
  enterWall: PropTypes.func.isRequired,
}

export default UserListUnit
