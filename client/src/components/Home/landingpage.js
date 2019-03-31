import React from "react";
import { Header, Grid, Icon } from "semantic-ui-react";

class Landingpage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="landing-page">
          <Grid container>
            <Grid.Row>
              <Grid.Column width="10">
                <Header size="huge">Alpha Synuclein System</Header>
                <Header.Subheader>
                  <Header as="p">
                    <Icon name="check" color="green" size="small" />
                    learn about alpha-synuclein protein.
                  </Header>
                  <Header as="p">
                    <Icon name="check" color="green" size="small" />
                    read relevant articles.
                  </Header>
                  <Header as="p">
                    <Icon name="check" color="green" size="small" />
                    view 3D models.
                  </Header>
                </Header.Subheader>
              </Grid.Column>
              <Grid.Column width="6" />
            </Grid.Row>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default Landingpage;
