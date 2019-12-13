const express = require('express');
const router = express.Router();
const models = require('./../models');

router.get('/', async function (req, res) {
  const [rows, fields] = await models.user.fetchAll();
  res.json(rows);
});

router.get('/listUsers', async function (req, res) {
  const [rows, fields] = await models.user.fetchAll();
  res.format({
    'text/html': () => {
      res.render('users/listUsers', {
        users: rows
      });
    }
  });
});

router.get('/add', async function (req, res) {
  res.render('users/add.pug');
});

router.get('/:userId/modify', async function (req, res) {
  const [rows, fields] = await models.user.fetchOne(req.params.userId);
  res.format({
    'text/html': () => {
      res.render('users/modify', {
        users: rows[0]
      });
    }
  });
});

router.get('/:userId', async function (req, res, next) {
  const [rows, fields] = await models.user.fetchOne(req.params.userId);
  res.json(rows);
  next();
});

router.delete('/:userId', async function (req, res, next) {
  const [rows, fields] = await models.user.delete(req.params.userId);
  res.format({
    'text/html': () => {
      res.redirect('/users/listUsers');
    }
  });
});

router.post('/', async function (req, res) {
  try {
    await models.user.add([
      req.body.last_name,
      req.body.first_name,
      req.body.budget
    ]);
    res.format({
      'text/html': function () {
        res.redirect('/users/listUsers');
      },
      'application/json': function () {
        res.json('user added with success');
      }
    });
  } catch (err) {
    console.log(err);
  }
});

router.post('/:userId', async function (req, res) {
  try {
    console.log("req", req.body);
    const [rows, fields] = await models.user.modify(
      req.params.userId,
      req.body
    );
    console.log('modifyed with success');
    res.format({
      'text/html': function () {
        res.redirect('/users/listUsers');
      },
      'application/json': function () {
        res.json(rows);
      }
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
