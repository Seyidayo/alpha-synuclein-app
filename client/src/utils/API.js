import axios from "axios";

export default {
  loadArticle: function() {
    return axios.get("/api/loadarticle");
  },
  loadDatabase: function() {
    return axios.get("/api/loaddatabase");
  },

  loadNews: function() {
    return axios.get("/api/loadnews");
  }
};
