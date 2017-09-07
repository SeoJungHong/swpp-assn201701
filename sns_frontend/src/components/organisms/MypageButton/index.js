import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components'
import { MypageModal } from 'containers'

const MypageButton = ({ user, onMypage, ...props }) => {
  return (
    <div>
      {user &&
      <div>
        <Button reverse {...props} onClick={onMypage}>Mypage for {user.username}</Button>
        <MypageModal />
      </div>
      }
    </div>
  )
}

MypageButton.propTypes = {
  user: PropTypes.object,
  onMypage: PropTypes.func.isRequired,
}

export default MypageButton
