import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { ChatModal } from 'components'

storiesOf('ChatModal', module)
  .add('default', () => (
    <ChatModal
      onFacebookLogin={action('facebook')}
      onGoogleLogin={action('google')}
      onClose={action('closed')}
      isOpen
    />
  ))
