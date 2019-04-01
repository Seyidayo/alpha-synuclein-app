const router = require("express").Router();
const articleController = require("../controllers/articleController");
const databaseController = require("../controllers/databaseController");
const newsController = require("../controllers/newsController");
router.route("/loadarticle").get(articleController.find);
router.route("/loaddatabase").get(databaseController.find);
router.route("/loadnews").get(newsController.find);
module.exports = router;
