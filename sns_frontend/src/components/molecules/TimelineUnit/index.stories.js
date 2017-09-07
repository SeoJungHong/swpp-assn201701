import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TimelineUnit } from 'components'

storiesOf('TimelineUnit', module)
  .add('default', () => (
    <TimelineUnit title="Hello" body="Ullamco et reprehenderit magna cillum ullamco consectetur et enim aliqua." />
  ))
