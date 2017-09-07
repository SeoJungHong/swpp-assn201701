import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { MypageButton } from 'components'

storiesOf('MypageButton', module)
  .add('default', () => (
    <MypageButton onLogin={action('login')} onLogout={action('logout')} />
  ))
  .add('with user', () => (
    <MypageButton
      user={{ picture: 'https://avatars3.githubusercontent.com/u/3068563?v=3&s=460' }}
      onLogin={action('login')}
      onLogout={action('logout')}
    />
  ))
