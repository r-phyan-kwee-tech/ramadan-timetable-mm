import React from "react";
import { TimetableList, Settings, TimetableDetails } from "containers";
// import {BrowserRouter as Router, Route} from 'react-router-dom' import
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import createHistory from "history/createBrowserHistory";
import { NotFound } from "../components";

export default () => (
  <ConnectedRouter history={createHistory()}>
    <Switch>
      <Route exact path="/" component={TimetableList} />
      <Route exact path="/details/:dayId" component={TimetableDetails} />
      <Route path="/settings" component={Settings} />
      <Route component={NotFound} />
    </Switch>
  </ConnectedRouter>
);

// function Routes() {   return (   ) } export default Routes
