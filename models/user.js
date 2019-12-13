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
  delete() {
    //todo
  },
  modify(id, body) {
    console.log(body);
    return connection.execute(
      'UPDATE client SET nom = ? , prenom = ? , adresse = ?, date_naissance=?, civilite=?, numero=?, id_ville=? WHERE id_client = ?',
      [
        body.nom,
        body.prenom,
        body.adresse,
        body.date_naissance,
        body.civilite,
        body.numero,
        body.id_ville,
        id
      ]
    );
  }
};
