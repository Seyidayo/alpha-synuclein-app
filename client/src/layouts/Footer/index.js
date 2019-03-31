import React from "react";
import { Header, Icon } from "semantic-ui-react";

const Footer = () => (
  <React.Fragment>
    <div style={{ textAlign: "center", backgroundColor: "lightGray" }}>
      <Header as="h4">
        <Icon name="copyright outline" color="black" size="small" /> Copyright, Alpha
        Synuclein System 2019
      </Header>
    </div>
  </React.Fragment>
);

export default Footer;
