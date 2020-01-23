const express = require("express");
const router = express.Router();
const models = require("./../models");
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const sessionstorage = require("sessionstorage");

router.get("/", async function(req, res) {
  const [rows, fields] = await models.user.fetchAll();
  const [ro, fie] = await models.user.fetchAllOrders();

  res.json(ro);
});

router.get("/listUsers", auth, async function(req, res) {
  const [rows, fields] = await models.user.fetchAll();
  res.format({
    "text/html": () => {
      res.render("users/listUsers", {
        users: rows
      });
    }
  });
});

router.get("/login", async function(req, res) {
  // TODO connexion
  res.format({
    "text/html": () => {
      res.render("users/login");
    }
  });
});

router.get("/add", auth, async function(req, res) {
  res.render("users/add.pug");
});

router.get("/:userId/modify", auth, async function(req, res) {
  const [rows, fields] = await models.user.fetchOne(req.params.userId);
  const [ro, fe] = await models.user.fetchOneOrders(req.params.userId);
  res.format({
    "text/html": () => {
      res.render("users/modify", {
        users: rows[0],
        orders: ro
      });
    }
  });
});

router.get("/:userId", auth, async function(req, res, next) {
  const [rows, fields] = await models.user.fetchOne(req.params.userId);
  res.json(rows);
  next();
});

router.delete("/:userId", auth, async function(req, res, next) {
  const [rows, fields] = await models.user.delete(req.params.userId);
  res.format({
    "text/html": () => {
      res.redirect("/users/listUsers");
    }
  });
});

router.post("/", auth, async function(req, res) {
  try {
    await models.user.add([
      req.body.last_name,
      req.body.first_name,
      req.body.budget
    ]);
    res.format({
      "text/html": function() {
        res.redirect("/users/listUsers");
      },
      "application/json": function() {
        res.json("user added with success");
      }
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/login/in", async function(req, res) {
  try {
    const log = await models.user.login({
      email: req.body.email,
      password: req.body.password
    });
    if (log[0].length > 0) {
      // Good credentials
      res.redirect("/users/listUsers");

      var token = jwt.sign({ user: log[0] }, "jwtKey");
      sessionstorage.setItem("token", token);
    } else {
      // Bad credentials
      res.render("users/login", {
        error: "Bad credentials"
      });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login/out", async function(req, res) {
  sessionstorage.removeItem("token");
  res.redirect("/");
});

router.post("/:userId", auth, async function(req, res) {
  try {
    const [rows, fields] = await models.user.modify(
      req.params.userId,
      req.body
    );
    console.log("modifyed with success");
    res.format({
      "text/html": function() {
        res.redirect("/users/listUsers");
      },
      "application/json": function() {
        res.json(rows);
      }
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
