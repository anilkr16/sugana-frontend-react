import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Dashboard from "./components/dashboard/index";
import "./styles.scss";

const appRouting = (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));