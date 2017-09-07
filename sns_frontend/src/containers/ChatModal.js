import React from 'react'
import { connect } from 'react-redux'
import { fromChat } from 'store/selectors'
import { submitChat, closeChatroom, modalHide } from 'store/actions'
import { ChatModal } from 'components'

const ChatModalContainer = props => <ChatModal {...props} />

const mapStateToProps = state => ({
  partnerId: fromChat.getPartnerId(state),
  partnerName: fromChat.getPartnerName(state),
  messages: fromChat.getChatMessages(state),
})

const mapDispatchToProps = dispatch => ({
  submitChat: (partnerId, message) => dispatch(submitChat(partnerId, message)),
  closeChatroom: () => {
    dispatch(modalHide('chat'))
    dispatch(closeChatroom())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatModalContainer)
