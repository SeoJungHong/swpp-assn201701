import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { UserListModal } from 'components'

storiesOf('UserListModal', module)
  .add('default', () => (
    <UserListModal
      onFacebookLogin={action('facebook')}
      onGoogleLogin={action('google')}
      onClose={action('closed')}
      isOpen
    />
  ))
