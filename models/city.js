module.exports = {
    fetchAll() {
        return connection.execute('SELECT * FROM ville')
    },
    fetchStartwith(text) {
        console.log(text)
        return connection.execute("SELECT * FROM ville WHERE nom LIKE '" + text + "%' ");
    },
    fetchById(id) {
        return connection.execute("SELECT * FROM ville WHERE id_ville = ?", [
            id
        ])
    }
}