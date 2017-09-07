import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components'
import { LoginModal } from 'containers'

const UserButton = ({ user, onLogin, onLogout, ...props }) => {
  return (
    <div>
      {user &&
        <div>
          <Button {...props} onClick={onLogout}>Sign out</Button>
        </div>
      }
      {!user && <Button {...props} onClick={onLogin}>Sign in</Button>}
      <LoginModal />
    </div>
  )
}

UserButton.propTypes = {
  user: PropTypes.object,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
}

export default UserButton
