import React from "react";
import PageLoader from "../../layouts/Loader";
import API from "../../utils/API";
import { DatabaseList } from "../../services";
import { Header, Divider } from "semantic-ui-react";

class Database extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      databaseState: []
    };
  }

  componentDidMount() {
    this.loadPageData();
    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
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
