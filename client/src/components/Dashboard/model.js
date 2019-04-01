import React from "react";
import { Header, Divider, Container, Button, Modal } from "semantic-ui-react";

class Model extends React.PureComponent {
  render() {
    return (
      <div>
        <Header size="large">3D Models</Header>
        <Divider horizontal />
        <Container>
          <Modal trigger={<Button size="large">1XQ8</Button>} size="small">
            <Modal.Header>1XQ8</Modal.Header>
            <Modal.Content>
              <iframe
                id="iframeViewer"
                width="100%"
                title="Something"
                style={{
                  border: 0,
                  minHeight: 400,
                  backgroundColor: "white",
                  overflow: "hidden"
                }}
                scrolling="no"
                src="https://gjbekker.github.io/molmil/#molmil.loadPDB('1xq8')"
              />
              <Modal.Description />
            </Modal.Content>
          </Modal>

          <Modal trigger={<Button size="large">3Q25</Button>} size="small">
            <Modal.Header>3Q25</Modal.Header>
            <Modal.Content>
              <iframe
                id="iframeViewer"
                width="100%"
                title="Something"
                style={{
                  border: 0,
                  minHeight: 400,
                  backgroundColor: "white",
                  overflow: "hidden"
                }}
                scrolling="no"
                src="https://gjbekker.github.io/molmil/#molmil.loadPDB('3q25')"
              />
              <Modal.Description />
            </Modal.Content>
          </Modal>

          <Modal trigger={<Button size="large">4RIL</Button>} size="small">
            <Modal.Header>4RIL</Modal.Header>
            <Modal.Content>
              <iframe
                id="iframeViewer"
                width="100%"
                title="Something"
                style={{
                  border: 0,
                  minHeight: 400,
                  backgroundColor: "white",
                  overflow: "hidden"
                }}
                scrolling="no"
                src="https://gjbekker.github.io/molmil/#molmil.loadPDB('4RIL')"
              />
              <Modal.Description />
            </Modal.Content>
          </Modal>

          <Modal trigger={<Button size="large">5F1W</Button>} size="small">
            <Modal.Header>5F1W</Modal.Header>
            <Modal.Content>
              <iframe
                id="iframeViewer"
                width="100%"
                title="Something"
                style={{
                  border: 0,
                  minHeight: 400,
                  backgroundColor: "white",
                  overflow: "hidden"
                }}
                scrolling="no"
                src="https://gjbekker.github.io/molmil/#molmil.loadPDB('5F1W')"
              />
              <Modal.Description />
            </Modal.Content>
          </Modal>

          <Modal trigger={<Button size="large">4BIT</Button>} size="small">
            <Modal.Header>4BIT</Modal.Header>
            <Modal.Content>
              <iframe
                id="iframeViewer"
                width="100%"
                title="Something"
                style={{
                  border: 0,
                  minHeight: 400,
                  backgroundColor: "white",
                  overflow: "hidden"
                }}
                scrolling="no"
                src="https://gjbekker.github.io/molmil/#molmil.loadPDB('4BIT')"
              />
              <Modal.Description />
            </Modal.Content>
          </Modal>
        </Container>
      </div>
    );
  }
}

export default Model;
