import { connect } from 'react-redux'
import { getMessages, enterWall, modalHide } from 'store/actions'
import { UserListUnit } from 'components'

const mapDispatchToProps = (dispatch) => ({
  startChat: (partnerId, partnerName) => {
    dispatch(getMessages(partnerId, partnerName))
    dispatch(modalHide('UserList'))
  },
  enterWall: (targetuser) => {
    dispatch(enterWall(targetuser))
    dispatch(modalHide('UserList'))
  },
})

export default connect(undefined, mapDispatchToProps)(UserListUnit)
