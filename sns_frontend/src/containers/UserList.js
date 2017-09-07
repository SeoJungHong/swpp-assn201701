import React from 'react'
import { connect } from 'react-redux'
import { fromMenu } from 'store/selectors'
import { UserList } from 'components'

const UserListContainer = props => <UserList {...props} />

const mapStateToProps = state => ({
  userList: fromMenu.getSearchlist(state),
})

export default connect(mapStateToProps)(UserListContainer)
