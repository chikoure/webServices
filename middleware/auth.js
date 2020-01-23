const jwt = require("jsonwebtoken");
const models = require("../models");

const auth = async (req, res, next) => {
  // TODO
  const token = req.header("Authorization").replace("Bearer ", "");
  // TODO
  const data = jwt.verify(token, process.env.JWT_KEY);

  try {
    const token = await models.token.fetchAll;
    if (!user) {
      throw new Error();
    }
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).send({ error: "Not authorized to access this resource" });
  }
};
module.exports = auth;
