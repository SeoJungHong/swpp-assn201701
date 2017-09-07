import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { ReduxField, Heading, Button } from 'components'

const Form = styled.form`
  box-sizing: border-box;
  padding: 0.2rem;
`

const SignupForm = ({ handleSubmit, submitting }) => {

  function check() {
    const pwd = document.getElementById('pwd').value
    const confirm = document.getElementById('confirm_pwd').value
    if (pwd === confirm) {
      document.getElementById('message').innerHTML = 'matching'
      document.getElementById('message').style.color = 'green'
      document.getElementById('button').disabled = false
    } else {
      document.getElementById('message').innerHTML = 'not matching'
      document.getElementById('message').style.color = 'red'
      document.getElementById('button').disabled = true
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Heading level={2}>Creat a new account</Heading>
      <Heading level={3}>Username</Heading>
      <Field name="username" component={ReduxField}/>
      <Heading level={3}>Password</Heading>
      <Field id="pwd" type="password" name="password" component={ReduxField} onKeyUp={check}/>
      <Heading level={3}>Confirm Password</Heading>
      <Field id="confirm_pwd" type="password" name="confirmPassword" component={ReduxField} onKeyUp={check}/>
      <span id="message"></span>
      <Heading level={3}>Email</Heading>
      <Field name="email" component={ReduxField} />
      <Button id="button" height={30} type="submit">Signup</Button>
    </Form>
  )
}

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
}

export default SignupForm
