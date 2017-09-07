import React from 'react'
import PropTypes from 'prop-types'
import { Input, Button } from 'components'
import styled from 'styled-components'
import { UserListModal, ChatModal } from 'containers'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  > * {
    display: inline-block;
  }
`

const SearchForm = ({ token, searchUser }) => {
  function search() {
    const searchName = document.getElementById('user').value
    searchUser(searchName)
    document.getElementById('user').value = ''
  }

  return (
    <div>
      <Wrapper>
        <Input style={{ height: '40px' }} id="user" placeholder="blank can search all user..." />
        <Button transparent onClick={search} disabled={!token}>Search User</Button>
      </Wrapper>
      <UserListModal />
      <ChatModal />
    </div>
  )
}

SearchForm.propTypes = {
  token: PropTypes.string,
  searchUser: PropTypes.func.isRequired,
}

export default SearchForm
