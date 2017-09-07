import React from 'react'
import { connect } from 'react-redux'
import { searchUser, modalShow } from 'store/actions'
import { fromLogin } from 'store/selectors'
import { SearchForm } from 'components'

const SearchFormContainer = props => <SearchForm {...props} />

const mapStateToProps = state => ({
  token: fromLogin.getToken(state),
})

const mapDispatchToProps = dispatch => ({
  searchUser: (username) => {
    dispatch(searchUser(username))
    dispatch(modalShow('UserList'))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchFormContainer)
