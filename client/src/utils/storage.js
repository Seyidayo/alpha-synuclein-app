const ARTICLES = "ALPHA_ARTICLES";
const DATABASE = "ALPHA_DATABASE";
const NEWS = "ALPHA_NEWS";

class DataStore {
  static getArticleData() {
    return JSON.parse(localStorage.getItem(ARTICLES));
  }

  static setArticleData = data => {
    localStorage.setItem(ARTICLES, JSON.stringify(data));
  };
  static getDatabaseData() {
    return JSON.parse(localStorage.getItem(DATABASE));
  }

  static setDatabaseData = data => {
    localStorage.setItem(DATABASE, JSON.stringify(data));
  };

  static getNews() {
    return JSON.parse(localStorage.getItem(NEWS));
  }

  static setNews = data => {
    localStorage.setItem(NEWS, JSON.stringify(data));
  };
}

export default DataStore;
