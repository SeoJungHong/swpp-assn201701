import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Modal } from 'containers'
import { Input, Icon, Button, Heading } from 'components'

const Wrapper = styled.div`
  display: flex;
  alignItems: center;
  flex-direction: column;
  > * {
    margin: 0.5rem auto;
  }
`

class MypageModal extends Component {
  static propTypes = {
    user: PropTypes.object,
    adjust: PropTypes.func.isRequired,
  }

  submit() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const email = document.getElementById('email').value
    if (regex.test(email)) {
      document.getElementById('message').innerHTML = ''
      document.getElementById('email').value = ''
      this.props.adjust(email)
    } else {
      document.getElementById('message').innerHTML = 'Invalid Email'
      document.getElementById('message').style.color = 'red'
    }
  }

  render() {
    return (
      <Modal title="Mypage" name="Mypage" closeable {...this.props}>
        <Wrapper>
          <Icon icon="user" height={200} />
          <div>
            <p>Your Id : {this.props.user.username}</p>
            <p>Your Email : {this.props.user.email}</p>
            <p>Your Point : {this.props.user.point}</p>
          </div>
          <Heading level={3}>Revise</Heading>
          <Input placeholder="put email" id="email" />
          <span id="message"></span>
          <Button onClick={() => this.submit()}>submit</Button>
        </Wrapper>
      </Modal>
    )
  }
}

export default MypageModal
