const express = require('express');
const router = express.Router();
const models = require('./../models')

router.get('/', async function(req, res) {
  res.send(await models.user.fetchAll());
});

module.exports = router
