var express = require("express");
const messages = require("../messages");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board", messages: messages });
});

module.exports = router;
