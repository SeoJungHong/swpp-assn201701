import React from 'react'
import { PageTemplate, Header } from 'components'
import { Category, Sidebar } from 'containers'

const CategoryPage = () => {
  return (
    <PageTemplate header={<Header />} sidebar={<Sidebar />}>
      <Category />
    </PageTemplate>
  )
}

export default CategoryPage
