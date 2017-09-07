import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ReplyPost, ReplyList, Heading, Paragraph, Button, Block } from 'components'

const Article = styled.article`
  background-color: #F1F1F2;
  padding: 1rem;
  margin: 1rem;
`

const TimelineDetail = ({ timeline, user, deleteTimeline, postReply, postLike }) => {
  const likeNames = []
  let buttonName = 'Like'
  let userLiked = 'False'
  const numLikes = timeline.likes.length
  if (user) {
    for (let i = 0; i < numLikes; i += 1) {
      if (timeline.likes[i].username === user.username) {
        buttonName = 'Cancel'
        userLiked = 'True'
        likeNames.push('ME')
      } else {
        likeNames.push(timeline.likes[i].username)
      }
    }
  }
  return (
    <Article>
      <Heading level={2}><b>{timeline.writer}</b> posted at {timeline.created}</Heading>
      <Heading level={5}>Total {timeline.clicks} clicks</Heading>
      <Paragraph>{timeline.text}</Paragraph>
      {timeline.files != "" && <img src={timeline.files} style={{width: 600}}/>}
      <Block>
        <Button height={30} onClick={() => postLike(timeline.id, userLiked)} transparent={userLiked=='True'} disabled={!user}>{buttonName}</Button> Total {numLikes} likes {likeNames && `(${likeNames.join(', ')})`}
      </Block>
      <ReplyList replies={timeline.replies} />
      <ReplyPost user={user} postReply={postReply} timelineId={timeline.id} />
      {user && timeline.writer === user.username && <Button height={10} onClick={() => deleteTimeline(timeline.id)} transparent>Delete</Button>}
    </Article>
  )
}

TimelineDetail.propTypes = {
  timeline: PropTypes.object,
  user: PropTypes.object,
  deleteTimeline: PropTypes.func.isRequired,
  postReply: PropTypes.func.isRequired,
  postLike: PropTypes.func.isRequired,
}

export default TimelineDetail
