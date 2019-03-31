import React from "react";
import { Header, Divider, Container, Card } from "semantic-ui-react";
// import { PDBView } from "react-pdb-view/src/lib/index.jsx";
// import { PdbPrints, PdbDataLoader } from "pdb-web-components";
// import { OBJModel,JSONModel } from "react-3d-viewer";
// var viewer = require("biojs-vis-pdbviewer");

// var model = require("../../services/models/1A05.pdb");

class Model extends React.PureComponent {
  render() {
    return (
      <div>
        <Header size="large">3D Models</Header>
        <Divider horizontal />
        <Container>
          <Card className="app-model-container">
            {/* <iframe
              id="iframeViewer"
              width="100%"
              style={{
                border: 0,
                minHeight: 600,
                backgroundColor: "white",
                overflow: "hidden"
              }}
              scrolling="no"
              src="https://Alain-Gateau.github.io/Protein-3D-structure/?nxentry=NX_P37840"
            /> */}

            {/* <iframe
              id="iframeViewer"
              width="100%"
              style={{
                border: 0,
                minHeight: 600,
                backgroundColor: "white",
                overflow: "hidden"
              }}
              scrolling="no"
              src="http://basketball-score-app.herokuapp.com"
            /> */}
            <iframe
              id="iframeViewer"
              width="100%"
              title="Model Renderer"
              style={{
                border: 0,
                minHeight: 600,
                backgroundColor: "white",
                overflow: "hidden"
              }}
              scrolling="no"
              src="http://"
            />
          </Card>
        </Container>
      </div>
    );
  }
}

export default Model;
