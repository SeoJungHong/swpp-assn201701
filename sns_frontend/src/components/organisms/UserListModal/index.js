import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Modal, UserList } from 'containers'
import { Button } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 0.5rem;
  }
`
const UserListModal = ({ onClose, ...props }) => {
  return (
    <Modal title="Search List" name="UserList" {...props}>
      <Wrapper>
        <Button onClick={onClose}>Close</Button>
		<UserList />
      </Wrapper>
    </Modal>
  )
}

UserListModal.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default UserListModal
