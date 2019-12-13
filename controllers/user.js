const express = require('express');
const router = express.Router();
const models = require('./../models');

router.get('/', async function(req, res) {
  const [rows, fields] = await models.user.fetchAll();
  res.json(rows);
});

router.get('/', async function(req, res) {
  const [rows, fields] = await models.user.fetchAllOrders();
  res.json(rows);
});

router.get('/:userId/modify', async function(req, res) {
  const [rows, fields] = await models.user.fetchOne(req.params.userId);
  // res.json(rows);
  res.format({
    'text/html': () => {
      res.render('users/modify', {
        users: rows[0]
      });
    }
  });
});

module.exports = router;
