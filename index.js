(async () => {
  const express = require("express");
  const app = express();
  const mysql = require("mysql2/promise");
  const config = require("./config.json");
  const methodOverride = require("method-override");

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(__dirname + "/node_modules/bootstrap/dist"));
  app.use(methodOverride("_method"));
  app.set("views", "./views");
  app.set("view engine", "pug");

  try {
    global.connection = await mysql.createConnection(config);
    console.log("connection to database is a success");
  } catch (err) {
    console.log(err);
  }

  const user = require("./controllers/index").user;
  const city = require("./controllers/index").city;
  const order_product = require("./controllers/index").order;
  // const token = require("./controllers/index").token;

  app.use("/users", user);
  app.use("/cities", city);
  app.use("/orders", order_product);
  // app.use("/token", token);

  app.get("/", (req, res) => {
    res.render("layout");
  });

  // Launching server
  app.listen(3000);
<<<<<<< HEAD
  console.log('Listening on port 3000...');
=======
  console.log("Listening 3000...");
>>>>>>> 73c0324b020a25e819fb4722bdc916cab8d998c8
})();
