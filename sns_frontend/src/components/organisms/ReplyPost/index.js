import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Block } from 'components'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  margin: 1rem;
  align-items: center;
`

const TextArea = styled.textarea`
  flex: 1;
  font-size: 1rem;
  padding: 0.5rem;
  margin: 1rem;
  box-sizing: border-box;
  background: #ffffff;
  border: solid 1px;
`

const ReplyPost = ({ user, timelineId, postReply }) => {
  const inputId = `${timelineId}_reply_input`
  const buttonId = `${timelineId}_reply_button`
  let textInput
  const handleClick = () => {
    postReply(timelineId, textInput.value)
    textInput.value = ''
  }
  return (
    <Wrapper>
      <TextArea id={inputId} type="textarea" innerRef={(comp) => textInput = comp} />
      <Button id={buttonId} disabled={!user} onClick={(e) => handleClick(e)}>Reply</Button>
    </Wrapper>
  )
}

ReplyPost.propTypes = {
  user: PropTypes.object,
  timelineId: PropTypes.number.isRequired,
  postReply: PropTypes.func.isRequired,
}

export default ReplyPost
