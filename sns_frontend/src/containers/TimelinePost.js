import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { postTimeline } from 'store/actions'
import { createValidator, required } from 'services/validation'
import { fromLogin } from 'store/selectors'
import { TimelinePost } from 'components'

let TimelinePostContainer = props => <TimelinePost {...props} />

const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  dispatch(postTimeline(data, resolve, reject))
})

const validate = createValidator({
  title: [required],
  text: [required],
})

TimelinePostContainer = reduxForm({
  form: 'TimelinePost',
  destroyOnUnmount: false,
  onSubmit,
  validate,
})(TimelinePostContainer)

TimelinePostContainer = connect(
  state => ({
    token: fromLogin.getToken(state),
  }),
)(TimelinePostContainer)

export default TimelinePostContainer
