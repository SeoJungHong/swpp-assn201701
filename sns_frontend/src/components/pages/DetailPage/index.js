import React from 'react'
import PropTypes from 'prop-types'
import { PageTemplate, Header } from 'components'
import { TimelineDetail, Sidebar } from 'containers'

const DetailPage = ({ match }) => {
  return (
    <PageTemplate header={<Header />} sidebar={<Sidebar />}>
      <TimelineDetail timelineId={match.params.id} />
    </PageTemplate>
  )
}

DetailPage.propTypes = {
  match: PropTypes.object.isRequired,
}

export default DetailPage
