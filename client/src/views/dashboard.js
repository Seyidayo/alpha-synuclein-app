import React from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "../layouts/Navigation";
import News from "../components/Dashboard/news";

import Overview from "../components/Dashboard/overview";
import Article from "../components/Dashboard/article";
import Disease from "../components/Dashboard/disease";
import Database from "../components/Dashboard/database";
import Model from "../components/Dashboard/model";

import { Grid } from "semantic-ui-react";

class Dashboard extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Grid>
          <Grid.Row>
            <Grid.Column width="3" className="app-side-menu">
              <Navigation />
            </Grid.Column>

            <Grid.Column width="9" className="app-container">
              <Switch>
                <Route exact path="/dashboard" component={Overview} />
                <Route path="/dashboard/disease" component={Disease} />
                <Route path="/dashboard/article" component={Article} />
                <Route path="/dashboard/database" component={Database} />
                <Route path="/dashboard/model" component={Model} />
              </Switch>
            </Grid.Column>
            <Grid.Column width="4" className="app-news">
              <News />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Dashboard;
