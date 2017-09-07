import React from 'react'
import { reduxForm } from 'redux-form'
import { login } from 'store/actions'
import { createValidator, required } from 'services/validation'

import { LoginForm } from 'components'

const LoginFormContainer = props => <LoginForm {...props} />

const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  dispatch(login(data, resolve, reject))
})

const validate = createValidator({
  username: [required],
  password: [required],
})

export default reduxForm({
  form: 'LoginForm',
  destroyOnUnmount: false,
  onSubmit,
  validate,
})(LoginFormContainer)
