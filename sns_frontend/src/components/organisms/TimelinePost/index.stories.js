import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TimelinePost } from 'containers'

storiesOf('TimelinePost', module)
  .add('default', () => (
    <TimelinePost />
  ))
