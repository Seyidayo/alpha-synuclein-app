import React from "react";
import { Card, Button, Header } from "semantic-ui-react";

const databaseTags = {
  "Enzyme and pathway databases": [],
  "Family and domain databases": [],
  "Genome annotation databases": [],
  "Organism-specific databases": [],
  Other: [],
  "Phylogenomic databases": [],
  "Polymorphism and mutation databases": [],
  "Protocols and materials databases": [],
  "PTM databases": [],
  "Sequence databases": []
};

const GetNames = ({ names }) => {
  if (names.length < 1) {
    return console.log("Naaaaa");
  }
  return (
    <div>
      {names.map((name, index) => (
        <React.Fragment key={index}>
          {name.FullName} {name.foreName} {name.lastName},&nbsp;
        </React.Fragment>
      ))}
    </div>
  );
};

export const ArticleList = ({ article }) => {
  return (
    <div>
      {article.map((item, index) => (
        <Card fluid key={index} raised>
          <Card.Content>
            <Card.Header className="app-card-header">
              <a target="_blank" href={item.link} rel="noopener noreferrer">
                {item.title}
              </a>
            </Card.Header>
            <Card.Meta className="app-card-lite-description">
              <GetNames names={item.authors} />
            </Card.Meta>
            <Card.Description className="app-card-description">
              {item.description}
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
};

export const DatabaseList = ({ database }) => {
  database.map(item => databaseTags[item.tag].push(item));
  return Object.keys(databaseTags).map(key => {
    return (
      <React.Fragment>
        <Header size="medium" className="app-card-key-header">
          {key}
        </Header>
        <Card.Group>
          {databaseTags[key].map((item, index) => {
            return (
              <Card key={index} raised>
                <Card.Content>
                  <Card.Header className="app-card-header">
                    {item.title}
                  </Card.Header>
                  <Card.Meta className="app-card-lite-description">
                    {item.dbIndex}
                  </Card.Meta>
                </Card.Content>
                <Card.Content>
                  <a
                    href={item.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="app-card-lite-description"
                  >
                    <Button color="black">Visit</Button>
                  </a>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      </React.Fragment>
    );
  });
};

export const DiseaseList = ({ disease }) => {
  return (
    <div>
      {disease.map((d, index) => (
        <Card fluid>
          <Card.Content>
            <Card.Description>{d.description}</Card.Description>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
};

export const NewsList = ({ news }) => {
  return (
    <div>
      {news.map((item, index) => (
        <Card fluid key={index} raised>
          <Card.Content>
            <Card.Header className="app-card-header">
              <a target="_blank" rel="noopener noreferrer" href={item.link}>
                {item.title}
              </a>
            </Card.Header>
            <Card.Meta className="app-card-lite-description">
              {item.date}
            </Card.Meta>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
};

export const OverviewList = ({ overview }) => {
  for (let data of overview) {
    return (
      <div>
        {/* <Grid> 
           <Grid.Row>
            <Grid.Column width="8"> */}
        <Card fluid raised>
          <Card.Content>
            <Card.Header>
              <Header as="h4">Protein</Header>
            </Card.Header>
            <Card.Description>
              <Header size="small">
                <b>Name: </b> {data.entry.overview.proteinNames[0].name}
              </Header>
              <Header size="small">
                <b>Id: </b> {data.entry.overview.proteinNames[0].id}
              </Header>
              <Header size="small">
                <b>Synonyms: </b>{" "}
                {data.entry.overview.proteinNames[0].synonyms[0].name}, Non-A4
                component of amyloid precursor
              </Header>
            </Card.Description>
          </Card.Content>
        </Card>
        {/* </Grid.Column> */}
        {/* <Grid.Column width="8"> */}
        <Card fluid raised>
          <Card.Content>
            <Card.Header>
              <Header as="h4">Gene</Header>
            </Card.Header>
            <Card.Description>
              <Header size="small">
                <b>Name: </b> {data.entry.overview.geneNames[0].name}
              </Header>
              <Header size="small">
                <b>Id: </b> {data.entry.overview.geneNames[0].id}
              </Header>
              <Header size="small">
                <b>Synonyms: </b>{" "}
                {data.entry.overview.geneNames[0].synonyms[0].value},{" "}
                {data.entry.overview.geneNames[0].synonyms[1].value}
              </Header>
            </Card.Description>
          </Card.Content>
        </Card>
        {/* </Grid.Column>
          </Grid.Row> 
         </Grid> */}
      </div>
    );
  }
};
