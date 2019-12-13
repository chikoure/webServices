const express = require('express');
const router = express.Router();
const models = require('./../models');

router.get('/', async function(req, res) {
  const [rows, fields] = await models.user.fetchAll();
  res.json(rows);
});

router.get('/:orderId/orders', async function(req, res) {
  const [rows, fields] = await models.user.fetchOne(req.params.orderId);
  // res.json(rows);
  res.format({
    'text/html': () => {
      res.render('users/orders', {
        users: rows[0]
      });
    }
  });
});

module.exports = router;
