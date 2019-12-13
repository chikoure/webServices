const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', async function(req, res) {
  const [rows, fields] = await models.order.fetchAll();
  res.json(rows);
});

router.get('/:orderId/detail', async function(req, res) {
  const [rows, fields] = await models.order.fetchOne(req.params.orderId);
  console.log(rows);
  // res.json(rows);
  res.format({
    'text/html': () => {
      res.render('users/orders', {
        orders: rows
      });
    }
  });
});

module.exports = router;
