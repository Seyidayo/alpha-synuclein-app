import React from "react";

import PageLoader from "../../layouts/Loader";
import { NewsList } from "../../services";
import { Header, Divider } from "semantic-ui-react";
import API from "../../utils/API";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    this.loadPageData();
  }

  loadPageData() {
    try {
      API.loadNews().then(res =>
        this.setState({
          news: res.data
        })
      );
    } catch (error) {
      console.log(`Error at News page ${error}`);
    }
  }

  render() {
    const { news } = this.state;

    if (news.length === 0) {
      return <PageLoader />;
    }
    return (
      <div>
        <Header size="large">News</Header>
        <Divider horizontal />
        <NewsList news={news} />
      </div>
    );
  }
}

export default News;
