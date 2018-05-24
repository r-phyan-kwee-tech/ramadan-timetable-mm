import React from 'react'
import {App,TimetableList} from 'containers'
// import {BrowserRouter as Router, Route} from 'react-router-dom' import
import {Route} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import styled from 'styled-components'
import createHistory from 'history/createBrowserHistory'

const Container = styled.div `text-align: center;`
export default() => (
  <ConnectedRouter history={createHistory()}>
    <Container>
      <Route path="/" component={App}/>

    </Container>
  </ConnectedRouter>
)

// function Routes() {   return (   ) } export default Routes