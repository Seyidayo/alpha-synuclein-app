import React from "react";
import { Header, Container, Icon, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Headers = () => (
  <React.Fragment>
    <Menu size="large">
      <Container>
        <Menu.Item>
          <Link to="/">
            <Header as="h3">Alpha Synuclein System</Header>
          </Link>
        </Menu.Item>
        <Menu.Item position="right">
          <Link to="/dashboard">
            <Menu.Item as="a">
              <Header as="h4">
                Get Started <Icon name="arrow right" />
              </Header>
            </Menu.Item>
          </Link>
        </Menu.Item>
      </Container>
    </Menu>
  </React.Fragment>
);

export default Headers;
