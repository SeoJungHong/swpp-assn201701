import React from 'react'
import { connect } from 'react-redux'
import { fromLogin } from 'store/selectors'
import { modalHide } from 'store/actions'

import { LoginModal } from 'components'

const LoginModalContainer = props => <LoginModal {...props} />

const mapStateToProps = state => ({
  token: fromLogin.getToken(state),
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(modalHide('login')),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginModalContainer)
