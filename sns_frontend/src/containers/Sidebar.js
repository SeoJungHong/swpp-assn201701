import React from 'react'
import { connect } from 'react-redux'
import { fromLogin } from 'store/selectors'
import { updateUser, enterWall } from 'store/actions'
import { Sidebar } from 'components'

const SidebarContainer = props => <Sidebar {...props} />

const mapStateToProps = state => ({
  user: fromLogin.getUser(state),
})

const mapDispatchToProps = dispatch => ({
  updateUser : (targetuser) => { dispatch(updateUser(targetuser))},
  enterWall : (targetuser) => { dispatch(enterWall(targetuser))},

})

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer)
