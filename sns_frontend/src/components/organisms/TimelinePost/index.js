import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { ReduxField, Heading, Button } from 'components'
import Dropzone from 'react-dropzone';


const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
`

const FILE_FIELD_NAME = 'files';

const renderDropzoneInput = (field) => {
  const files = field.input.value;
  return (
    <div>
      <Dropzone
        name={field.name}
        onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
      >
        <div>Try dropping some files here, or click to select files to upload.</div>
      </Dropzone>
      {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
      {files && Array.isArray(files) && (
        <ul>
          { files.map((file, i) => <li key={i}>{file.name}</li>) }
        </ul>
      )}
    </div>
  );
}


const TimelinePost = ({ handleSubmit, submitting, token }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Heading>Post Your Story</Heading>
      <Field name="title" type="textinput" component={ReduxField} placeholder="title" />
      <Field name="text" type="textarea" component={ReduxField} placeholder="text" />
      <Heading level={3}>Privacy relationship</Heading>
      <label><Field name="privacy" type="checkbox" component="input" />Open only my followers</label>
      <Heading level={3}>Category</Heading>
      <label><Field name="category,Food" type="checkbox" component="input" />Food</label>
      <label><Field name="category,Activity" type="checkbox" component="input" />Activity</label>
      <label><Field name="category,Leisure" type="checkbox" component="input" />Leisure</label>
      <label><Field name="category,Beauty" type="checkbox" component="input" />Beauty</label>
      <div>
        <label htmlFor={FILE_FIELD_NAME}>Files</label>
        <Field
          name={FILE_FIELD_NAME}
          component={renderDropzoneInput}
        />
      </div>
      <Button type="submit" disabled={submitting || !token}>POST</Button>
    </Form>
  )
}

TimelinePost.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  token: PropTypes.string,
}

export default TimelinePost
