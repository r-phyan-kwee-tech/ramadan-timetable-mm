import React from 'react'
import {TimetableList, Settings} from 'containers'
// import {BrowserRouter as Router, Route} from 'react-router-dom' import
import {Route, Switch} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import styled from 'styled-components'
import createHistory from 'history/createBrowserHistory'
import {NotFound} from '../components';

const Container = styled.div `text-align: center;`
export default() => (
  <ConnectedRouter history={createHistory()}>
    <Switch>
      <Route exact path="/" component={TimetableList}/>
      <Route path="/settings" component={Settings}/>
      <Route component={NotFound}/>
    </Switch>
  </ConnectedRouter>
)

// function Routes() {   return (   ) } export default Routes