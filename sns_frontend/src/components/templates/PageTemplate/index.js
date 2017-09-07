import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Header = styled.header`
  width: 100%;
`

const Main = styled.div`
  display: flex;
  flex: 1;
`

const Sidebar = styled.section`
  box-sizing: border-box;
  flex: 0 0 8rem;
`

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  flex: 1;
`

const PageTemplate = ({ header, sidebar, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      <Main>
        <Sidebar>{sidebar}</Sidebar>
        <Content>{children}</Content>
      </Main>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  sidebar: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
}

export default PageTemplate
