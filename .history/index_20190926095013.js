const express = require('express');
const app = express();
const mysql = require('mysql2/promise');

(async () => {
  global.connection = await mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root',
  })
})()

const user = require('./controllers/index').user;
app.use('/users', user);

app.listen(3000)
console.log('Listening ...')