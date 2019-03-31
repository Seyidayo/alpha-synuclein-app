import React from "react";
import { Header, Divider } from "semantic-ui-react";

import { OverviewData } from "../../services/data";
import { OverviewList } from "../../services";

class Overview extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header size="large">Overview</Header>
        <Header.Subheader size="tiny"></Header.Subheader>
        <Divider horizontal />
        <OverviewList overview={OverviewData} />
      </React.Fragment>
    );
  }
}

export default Overview;
