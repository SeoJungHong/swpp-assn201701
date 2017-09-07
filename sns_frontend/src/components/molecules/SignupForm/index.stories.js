import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SignupForm } from 'components'

storiesOf('SignupForm', module)
  .add('default', () => (
    <SignupForm>Hello</SignupForm>
  ))
  .add('reverse', () => (
    <SignupForm reverse>Hello</SignupForm>
  ))
