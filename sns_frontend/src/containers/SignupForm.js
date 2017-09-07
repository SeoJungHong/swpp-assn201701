import React from 'react'
import { reduxForm } from 'redux-form'
import { signup } from 'store/actions'
import { createValidator, required } from 'services/validation'

import { SignupForm } from 'components'

const SignupFormContainer = props => <SignupForm {...props} />

const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  dispatch(signup(data, resolve, reject))
})

const validate = createValidator({
  username: [required],
  password: [required],
  confirmPassword: [required],
  email: [required],
})

export default reduxForm({
  form: 'SignupForm',
  destroyOnUnmount: false,
  onSubmit,
  validate,
})(SignupFormContainer)
