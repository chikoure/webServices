const express = require('express');
const app = express();
const mysql = require('mysql2/promise');

(async () => {
  global.connection = await mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Sup3r@dmin',
    database: 'employees'
  })

  const user = require('./controllers/index').user;
  app.use('/user', user);

  app.listen(3000)
  console.log('Listening ...')
})()
