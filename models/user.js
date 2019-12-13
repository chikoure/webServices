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
  modify(id, body) {
    return connection.execute(
      'UPDATE client SET nom = ? , prenom = ? , adresse = ?, civilite = ?, numero= ?, id_ville = ? WHERE id_client = ?',
      [
        body.nom,
        body.prenom,
        body.adresse,
        body.civilite,
        body.numero,
        body.id_ville == "null" || body.id_ville == "" ? null : body.id_ville,
        id
      ]
    );
  }
}