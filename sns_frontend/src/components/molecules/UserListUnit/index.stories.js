import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { UserListUnit } from 'components'

storiesOf('UserListUnit', module)
  .add('default', () => (
    <UserListUnit title="Hello" body="Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua." />
  ))
