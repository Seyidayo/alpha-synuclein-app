import React from "react";
import { Header, Divider } from "semantic-ui-react";

import PageLoader from "../../layouts/Loader";
import { ArticleList } from "../../services";
import API from "../../utils/API";

class Article extends React.Component {
  constructor(Props) {
    super(Props);
    this.state = {
      article: []
    };
  }

  componentDidMount() {
    this.loadPageData();
  }

  loadPageData() {
    try {
      API.loadArticle().then(res =>
        this.setState({
          article: res.data
        })
      );
    } catch (error) {
      console.log(`Error at articles page ${error}`);
    }
  }

  render() {
    const { article } = this.state;

    if (article.length === 0) {
      return <PageLoader />;
    }
    return (
      <div>
        <Header size="large">Articles</Header>
        <Divider horizontal />
        <ArticleList article={article} />
      </div>
    );
  }
}

export default Article;
