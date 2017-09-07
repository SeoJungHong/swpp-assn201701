import React, { PropTypes } from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { TimelinePage, PostingPage, DetailPage, CategoryPage, RankingPage } from 'components'
import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={TimelinePage} exact />
        <Route path="/post" component={PostingPage} />
        <Route path="/category" component={CategoryPage} />
        <Route path="/detail/:id" component={DetailPage} />
		<Route path="/ranking" component={RankingPage} />
      </Switch>
    </ThemeProvider>
  )
}

App.propTypes = {
  children: PropTypes.any,
}

export default App
