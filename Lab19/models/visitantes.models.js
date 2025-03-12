const db = require('../util/database');

const visitantes = [];

module.exports = class Visitante {

    constructor(mi_nombre) {
        this.nombre = mi_nombre;
    }

    save() {
        return db.execute('INSERT INTO visitantes(nombre) VALUES (?)', [this.nombre]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM visitantes');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM visitantes WHERE id=?', [id]);
    }

    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

} 