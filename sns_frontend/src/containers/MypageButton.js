import React from 'react'
import { connect } from 'react-redux'
import { fromLogin } from 'store/selectors'
import { modalShow } from 'store/actions'
import { MypageButton } from 'components'

const MypageButtonContainer = props => <MypageButton {...props} />

const mapStateToProps = state => ({
  user: fromLogin.getUser(state),
})

const mapDispatchToProps = dispatch => ({
  onMypage: () => dispatch(modalShow('Mypage')),
})

export default connect(mapStateToProps, mapDispatchToProps)(MypageButtonContainer)
