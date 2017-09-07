import React from 'react'
import { PageTemplate, Header } from 'components'
import { TimelineList, Sidebar } from 'containers'

const TimelinePage = () => {
  return (
    <PageTemplate header={<Header />} sidebar={<Sidebar />}>
      <TimelineList limit={15} />
    </PageTemplate>
  )
}

export default TimelinePage
