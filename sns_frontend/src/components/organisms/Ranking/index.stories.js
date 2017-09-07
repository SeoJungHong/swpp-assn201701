import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Ranking } from 'components'

storiesOf('Ranking', module)
  .add('default', () => (
    <Ranking />
  ))
  .add('reverse', () => (
    <Ranking reverse />
  ))
