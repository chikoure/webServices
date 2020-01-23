const express = require('express');
const router = express.Router();
const models = require('../models');
const auth = require('../middleware/auth');

router.post('/login', async function(req, res) {
  // TODO connexion
  res.format({
    'text/html': () => {
      res.render('token/login');
    }
  });
});

router.post('/logout', auth, async function(req, res, next) {
  //TODO déconnexion
});

module.exports = router;
