import React from 'react'
import { PageTemplate, Header } from 'components'
import { Ranking, Sidebar } from 'containers'

const RankingPage = () => {
  return (
    <PageTemplate header={<Header />} sidebar={<Sidebar />}>
      <Ranking />
    </PageTemplate>
  )
}

export default RankingPage
