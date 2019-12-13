module.exports = {
  fetchAll() {
    return connection.execute('SELECT * FROM employees')
  }
  addUser(body) {
    return connection.execute('INSERT INTO user(.....)VALUES (?,?,?,?,?)",[req.body,]employees')
  }
}