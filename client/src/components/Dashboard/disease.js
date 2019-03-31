import React from "react";
import { DiseaseData } from "../../services/data";
import { DiseaseList } from "../../services";
import { Header } from "semantic-ui-react";

class Disease extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header size="medium">Disease</Header>
        <DiseaseList disease={DiseaseData} />
      </React.Fragment>
    );
  }
}

export default Disease;
