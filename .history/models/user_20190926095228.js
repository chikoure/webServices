module.exports = {
  fetchAll() {
    return connection.execute('SELECT * FROM test')
  }
}