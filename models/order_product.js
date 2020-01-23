module.exports = {
  fetchAll() {
    return connection.execute("SELECT * FROM commande");
  },

  fetchOne(id) {
    return connection.execute(
      "SELECT * FROM commande_produit WHERE id_commande = ?",
      [id]
    );
    //todo
  },
  delete() {
    //todo
  },
  add() {
    //todo
  },
  modify() {}
};
