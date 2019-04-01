import React from "react";
import PageLoader from "../../layouts/Loader";
import { DatabaseList } from "../../services";
import { Header, Divider } from "semantic-ui-react";

import API from "../../utils/API";
import DataStore from "../../utils/storage";

class Database extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      databaseState: DataStore.getDatabaseData() ? DataStore.getDatabaseData() : []
    };
  }

  componentDidMount() {
    this.loadPageData();
  }

  componentWillUnmount() {
    const { databaseState } = this.state;
    DataStore.setDatabaseData(databaseState);
  }

  loadPageData() {
    try {
      API.loadDatabase().then(res =>
        this.setState({
          databaseState: res.data
        })
      );
    } catch (error) {
      console.log(`Error at database page ${error}`);
    }
  }

  render() {
    const { databaseState } = this.state;
    if (databaseState.length === 0) {
      return <PageLoader />;
    }
    return (
      <div>
        <Header size="large">Databases</Header>
        <Divider horizontal />
        <DatabaseList database={databaseState} />
      </div>
    );
  }
}

export default Database;
