const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  authors: {
    type: [Object],
    default: ""
  },
  link: {
    type: String,
    default: ""
  }
});

module.exports = mongoose.model("Article", ArticleSchema);
