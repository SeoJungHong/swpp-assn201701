import React from 'react'
import { connect } from 'react-redux'
import { fromLogin } from 'store/selectors'
import { modalShow, logout } from 'store/actions'
import { UserButton } from 'components'

const UserButtonContainer = props => <UserButton {...props} />

const mapStateToProps = state => ({
  user: fromLogin.getUser(state),
})

const mapDispatchToProps = dispatch => ({
  onLogin: () => dispatch(modalShow('login')),
  onLogout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserButtonContainer)
