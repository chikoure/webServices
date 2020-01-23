module.exports = {
  fetchAll() {
    return connection.execute('SELECT * FROM client');
  },

  fetchAllOrders() {
    return connection.execute('SELECT * FROM commande');
  },

  fetchOne(id) {
    return connection.execute('SELECT * FROM client WHERE id_client = ?', [id]);
    //todo
  },
  fetchOneOrders(id) {
    return connection.execute('SELECT * FROM commande WHERE id_client=? ', [
      id
    ]);
  },
  delete(id) {
    //todo
    return connection.execute('DELETE * FROM client WHERE id_client = ?', [id]);
  },
  modify(id, body) {
    return connection.execute(
      'UPDATE client SET nom = ? , prenom = ? , adresse = ?, civilite = ?, numero= ?, id_ville = ? WHERE id_client = ?',
      [
        body.nom,
        body.prenom,
        body.adresse,
        body.civilite,
        body.numero,
        body.id_ville == 'null' || body.id_ville == '' ? null : body.id_ville,
        id
      ]
    );
  },

  login(body) {
    return connection.execute(
      'SELECT * from user WHERE email = ? AND password = ?',
      [body.email, body.password]
    );
  }
};
