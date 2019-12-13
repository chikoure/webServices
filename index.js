(async () => {
  const express = require('express');
  const app = express();
  const mysql = require('mysql2/promise');
  const config = require('./config.json');
  const methodOverride = require('method-override');

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
  app.use(methodOverride('_method'));
  app.set('views', './views');
  app.set('view engine', 'pug');

  try {
    global.connection = await mysql.createConnection(config);
    console.log('connection to database is a success');
  } catch (err) {
    console.log(err);
  }

  const user = require('./controllers/index').user;

  app.use('/users', user);

  app.get('/', (req, res) => {
    res.render('layout');
  });

  // Launching server
  app.listen(3000);
  console.log('Listening ...');
})();
