import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Feed } from 'components'

storiesOf('Feed', module)
  .add('default', () => (
    <Feed>Hello</Feed>
  ))
  .add('reverse', () => (
    <Feed reverse>Hello</Feed>
  ))
