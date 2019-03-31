import React from "react";
import { Grid, Card, Header, Icon } from "semantic-ui-react";

const Features = () => {
  return (
    <React.Fragment>
      <div className="landing-page-inverted">
        <Grid container>
          <Grid.Row centered>
            <Grid.Column width="4" verticalAlign="middle">
              <Card>
                <Card.Content>
                  <Icon name="archive" size="massive" />
                  <Header as="h3">Articles</Header>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width="4" verticalAlign="middle">
              <Card>
                <Card.Content>
                  <Icon name="database" size="massive" />
                  <Header as="h3">Databases</Header>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width="4" verticalAlign="middle">
              <Card>
                <Card.Content>
                  <Icon name="dna" size="massive" />
                  <Header as="h3">3D Models</Header>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Features;
