import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Paragraph } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const TextList = ({ messages, ...props }) => {
  const texts = []
  if (messages && messages.length !== 0) {
    for (let i = 0; i < messages.length; i += 1) {
      texts.push(<Paragraph>{messages[i].fromUser.username}: {messages[i].message}</Paragraph>)
    }
  }
  return (
    <Wrapper {...props}>
      {texts.length > 0 && texts}
      {texts.length === 0 && 'Send your first message'}
    </Wrapper>
  )
}

TextList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
}

export default TextList
