const mongoose = require("mongoose");

const DatabaseSchema = new mongoose.Schema({
  title: {
    type: String,
    default: ""
  },
  tag: {
    type: String,
    default: ""
  },
  link: {
    type: String,
    default: ""
  },
  dbIndex: {
    type: String,
    default: ""
  }
});

module.exports = mongoose.model("Database", DatabaseSchema);
