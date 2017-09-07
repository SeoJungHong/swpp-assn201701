import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Modal } from 'containers'
import { Input, Button, TextList } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 0.5rem;
  }
`

class ChatModal extends Component {
  static propTypes = {
    partnerId: PropTypes.number,
    partnerName: PropTypes.string,
    messages: PropTypes.arrayOf(PropTypes.object),
    submitChat: PropTypes.func.isRequired,
    closeChatroom: PropTypes.func.isRequired,
  }

  submit() {
    const message = document.getElementById('input').value
    document.getElementById('input').value = ''
    this.props.submitChat(this.props.partnerId, message)
  }

  render() {
    const title = `Chat with ${this.props.partnerName}`
    return (
      <Modal title={title} name="chat" {...this.props}>
        <Wrapper>
          <Button reverse onClick={this.props.closeChatroom}>Close</Button>
          <TextList messages={this.props.messages} />
          <Input id="input" name="text" />
          <Button onClick={() => this.submit()}>Submit</Button>
        </Wrapper>
      </Modal>
    )
  }
}

export default ChatModal
