import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Category } from 'components'

storiesOf('Category', module)
  .add('default', () => (
    <Category />
  ))
  .add('reverse', () => (
    <Category reverse />
  ))
