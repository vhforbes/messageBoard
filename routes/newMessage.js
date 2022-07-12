let express = require("express");
let router = express.Router();
const messages = require("../messages");

router.get("/", (req, res) => {
  res.render("form");
});

router.post("/", (req, res) => {
  const { name, message } = req.body;
  messages.push({ name, message, added: new Date() });
  res.redirect("/");
});

module.exports = router;
