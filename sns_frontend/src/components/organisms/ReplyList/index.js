import React from 'react'
import PropTypes from 'prop-types'

import { ReplyUnit } from 'components'

const ReplyList = ({ replies }) => {
  let i = 0
  return (
    <div>
      {replies.map(reply => <ReplyUnit key={i++} reply={reply} />)}
    </div>
  )
}

ReplyList.propTypes = {
  replies: PropTypes.array,
}

export default ReplyList
