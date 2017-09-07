import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Heading, Paragraph, Button } from 'components'

const Wrapper = styled.div`
  font-family: ${font('quote')};
  color: ${palette('grayscale', 0)};
  box-sizing:border-box;
  border-radius: 2rem;
  padding: 1rem;
  text-align: center;
  background-color: #7df3c5; 
  border:4px #1a83bd;
`

const Feed = ({ user, targetUser, requestFollow, ...props }) => {
  console.log('[component] Feed username', targetUser.username, user.username)
  const myWall = user.username === targetUser.username
  let userFollowing = false
  let followButton = 'Follow +'
  if (targetUser) {
    for (let i = 0; i < targetUser.followers.length; i += 1) {
      if (targetUser.followers[i] === user.username) {
        followButton = 'Following'
        userFollowing = true
        break
      }
    }
  }
  return (
    <Wrapper {...props}>
      <Heading level={2}>{myWall ? 'This is My Wall' : `Welcome to ${targetUser.username}'s Wall`}</Heading>
      <Paragraph>Followers : {targetUser.followers.length} Following : {targetUser.following.length}</Paragraph>
      {!myWall && <Button id="follow" type="submit" disabled={!user} transparent={userFollowing} onClick={() => requestFollow(targetUser, userFollowing)}>{followButton}</Button>}
    </Wrapper>
  )
}

Feed.propTypes = {
  user: PropTypes.object,
  targetUser: PropTypes.object.isRequired,
  requestFollow: PropTypes.func.isRequired,
}

export default Feed
