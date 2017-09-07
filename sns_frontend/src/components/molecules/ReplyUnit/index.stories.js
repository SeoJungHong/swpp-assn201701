import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ReplyUnit } from 'components'

storiesOf('ReplyUnit', module)
  .add('default', () => (
    <ReplyUnit title="Hello" body="Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua." />
  ))
