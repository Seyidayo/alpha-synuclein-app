import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/home";
import Dashboard from "./views/dashboard";

import "./App.css";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
