module.exports = {
  fetchAll() {
    return connection.execute('SELECT * FROM client')
  },
  fetchOne(ID) {
    return connection.execute('SELECT * FROM client WHERE id_client= ? ', [ID]);
  },
  delete() {
    //todo
  },
  add() {
    //todo
  },
  modify() {
    //todo
  },
}