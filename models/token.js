module.exports = {
  fetchOne(token) {
    return connection.execute("SELECT * FROM token WHERE token = ?", [token]);
  }
};
