const router = require("express").Router();
const articleController = require("../controllers/articleController");
const databaseController = require("../controllers/databaseController");

router.route("/loadarticle").get(articleController.find);
router.route("/loaddatabase").get(databaseController.find);

module.exports = router