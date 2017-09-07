import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { SearchForm } from 'components'

storiesOf('SearchForm', module)
  .add('default', () => (
    <SearchForm onLogin={action('login')} onLogout={action('logout')} />
  ))
  .add('with user', () => (
    <SearchForm
      user={{ picture: 'https://avatars3.githubusercontent.com/u/3068563?v=3&s=460' }}
      onLogin={action('login')}
      onLogout={action('logout')}
    />
  ))
