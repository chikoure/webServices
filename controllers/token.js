const express = require("express");
const router = express.Router();
const models = require("../models");
const auth = require("../middleware/auth");

router.post("/login", auth, async function(req, res) {
  // TODO connexion
});

router.post("/logout", auth, async function(req, res, next) {
  //TODO déconnexion
});

module.exports = router;
