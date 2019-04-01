import React from "react";
import { Header, Divider } from "semantic-ui-react";

import PageLoader from "../../layouts/Loader";
import { ArticleList } from "../../services";

import DataStore from "../../utils/storage";
import API from "../../utils/API";

class Article extends React.Component {
  constructor(Props) {
    super(Props);
    this.state = {
      article: DataStore.getArticleData() ? DataStore.getArticleData() : []
    };
  }

  componentDidMount() {
    this.loadPageData();
  }

  componentWillUnmount() {
    const { article } = this.state;
    DataStore.setArticleData(article);
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
