import React from 'react'
import { connect } from 'react-redux'
import { modalHide } from 'store/actions'
import { UserListModal } from 'components'

const UserListModalContainer = props => <UserListModal {...props} />


const mapDispatchToProps = dispatch => ({
  onClose: () => {
    dispatch(modalHide('UserList'))
  },
})

export default connect(undefined, mapDispatchToProps)(UserListModalContainer)
