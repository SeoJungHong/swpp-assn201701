import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { ReduxField, Heading, Button } from 'components'

const Form = styled.form`
  box-sizing: border-box;
  padding: 0.2rem;
`

const LoginForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Heading level={2}>Use the existing account</Heading>
      <Heading level={3}>Username</Heading>
      <Field name="username" component={ReduxField} />
      <Heading level={3}>Password</Heading>
      <Field type="password" name="password" component={ReduxField} />
      <Button height={30} type="submit">Login</Button>
    </Form>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
}

export default LoginForm
