import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { MypageModal } from 'components'

storiesOf('MypageModal', module)
  .add('default', () => (
    <MypageModal
      onFacebookLogin={action('facebook')}
      onGoogleLogin={action('google')}
      onClose={action('closed')}
      isOpen
    />
  ))
