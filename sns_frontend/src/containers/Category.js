import React from 'react'
import { connect } from 'react-redux'
import { viewCategory } from 'store/actions'
import { Category } from 'components'

const CategoryContainer = props => <Category {...props} />

const mapDispatchToProps = dispatch => ({
  viewCategory: (category) => { dispatch(viewCategory(category)) },
})

export default connect(null, mapDispatchToProps)(CategoryContainer)
