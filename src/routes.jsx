import React from "react";
import { Router, Route} from "react-router";
import { history } from "react-router/lib/HashHistory";
import MainContainer from "./components/MainContainer";

var routes = (
  <Router history={history}>
    <Route path="/" component={MainContainer}>
    </Route>
  </Router>
);

export {routes};
