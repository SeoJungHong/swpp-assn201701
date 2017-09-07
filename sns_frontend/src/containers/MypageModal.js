import React from 'react'
import { connect } from 'react-redux'
import { fromLogin } from 'store/selectors'
import { adjust, modalHide } from 'store/actions'
import { MypageModal } from 'components'

const MypageModalContainer = props => <MypageModal {...props} />

const mapStateToProps = state => ({
  user: fromLogin.getUser(state),
})

const mapDispatchToProps = dispatch => ({
  adjust: (email) => dispatch(adjust(email)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MypageModalContainer)
