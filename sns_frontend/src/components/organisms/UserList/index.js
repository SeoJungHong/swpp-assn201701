import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { UserListUnit } from 'containers'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const UserList = ({ userList, ...props }) => {
  return (
    <Wrapper {...props}>
      {userList.map(user => <UserListUnit key={user.id} user={user} />)}
    </Wrapper>
  )
}

UserList.propTypes = {
  userList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default UserList
