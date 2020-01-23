const jwt = require("jsonwebtoken");
const sessionstorage = require("sessionstorage");

const auth = async (req, res, next) => {
  const token = sessionstorage.getItem("token");
  try {
    const data = jwt.verify(token, "jwtKey");
    if (!token) {
      throw new Error();
    }
    next();
  } catch (error) {
    res.status(401).send({ error: "Not authorized to access this resource" });
  }
};
module.exports = auth;
