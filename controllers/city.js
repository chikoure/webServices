const express = require('express');
const router = express.Router();
const models = require('./../models');

router.get('/', async function (req, res) {
    const [rows, fields] = await models.city.fetchAll();
    res.json(rows);
});

router.get('/:cityStartWith', async function (req, res, next) {
    const [rows, fields] = await models.city.fetchStartwith(req.params.cityStartWith);
    res.json(rows);
    next();
});

router.get('/byId/:cityId', async function (req, res, next) {
    const [rows, fields] = await models.city.fetchById(req.params.cityId);
    res.json(rows);
    next();
});

module.exports = router;
