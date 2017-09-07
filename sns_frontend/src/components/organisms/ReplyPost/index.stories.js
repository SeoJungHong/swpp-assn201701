import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ReplyPost } from 'containers'

storiesOf('ReplyPost', module)
  .add('default', () => (
    <ReplyPost />
  ))
