import React from 'react'
import { PageTemplate, Header } from 'components'
import { TimelinePost, Sidebar } from 'containers'

const PostingPage = () => {
  return (
    <PageTemplate header={<Header />} sidebar={<Sidebar />}>
      <TimelinePost />
    </PageTemplate>
  )
}

export default PostingPage
