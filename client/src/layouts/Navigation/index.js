import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../routes";
import { Menu, Header, Divider, Icon } from "semantic-ui-react";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "" };
  }

  render() {
    const { activeItem } = this.state;
    return (
      <React.Fragment>
        <Menu
          vertical
          pointing
          secondary
          borderless={true}
          fluid
          className="app-side-menu-items"
        >
          <div className="large-box">
            <Header size="medium">Alpha Synuclein System</Header>
          </div>
          <Link to={ROUTES.OVERVIEW}>
            <Menu.Item
              as="a"
              active={activeItem === "overview"}
              className="app-side-menu-item"
              name="overview"
            >
              <Header size="small">
                <Icon name="square" size="tiny" />
                Overview
              </Header>
            </Menu.Item>
          </Link>{" "}
          <Link to={ROUTES.ARTICLE}>
            <Menu.Item
              as="a"
              name="article"
              className="app-side-menu-item"
              active={activeItem === "article"}
            >
              <Header size="small">
                <Icon name="archive" size="tiny" />
                Article
              </Header>
            </Menu.Item>
          </Link>{" "}
          <Link to={ROUTES.DATABASE}>
            <Menu.Item
              as="a"
              name="database"
              className="app-side-menu-item"
              active={activeItem === "database"}
            >
              <Header size="small">
                <Icon name="database" size="tiny" />
                Database
              </Header>
            </Menu.Item>
          </Link>{" "}
          <Link to={ROUTES.DISEASE}>
            <Menu.Item
              as="a"
              name="disease"
              className="app-side-menu-item"
              active={activeItem === "disease"}
            >
              <Header size="small">
                <Icon name="hospital symbol" size="tiny" />
                Disease
              </Header>
            </Menu.Item>
          </Link>{" "}
          <Link to={ROUTES.MODEL}>
            <Menu.Item
              as="a"
              name="model"
              className="app-side-menu-item"
              active={activeItem === "model"}
            >
              <Header size="small">
                <Icon name="dna" size="tiny" />
                Model
              </Header>
            </Menu.Item>
          </Link>
          <div className="app-side-menu-bottom">
            <Link to="/">
              <Menu.Item as="a">
                <Header size="small">
                  <Icon size="tiny" name="angle double left" /> Back
                </Header>
              </Menu.Item>
            </Link>
          </div>
        </Menu>
      </React.Fragment>
    );
  }
}

export default Navigation;
