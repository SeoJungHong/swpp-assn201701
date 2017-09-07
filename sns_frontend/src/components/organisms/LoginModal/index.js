import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Modal, LoginForm, SignupForm } from 'containers'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 0.5rem;
  }
`

class LoginModal extends Component {
  static propTypes = {
    token: PropTypes.string,
    onClose: PropTypes.func.isRequired,
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.token && nextProps.token) {
      this.props.onClose()
    }
  }

  render() {
    return (
      <Modal title="Sign in to SNS" name="login" closeable {...this.props}>
        <Wrapper>
          <LoginForm />
          <SignupForm />
        </Wrapper>
      </Modal>
    )
  }
}

export default LoginModal
