const db = require('../util/database');

const visitantes = [];

module.exports = class Visitante {

    constructor(mi_nombre, mi_imagen) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
    }

    save() {
        return db.execute('INSERT INTO visitantes(nombre, imagen) VALUES (?, ?)', 
            [this.nombre, this.imagen]);
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

    static find(valor){
        if (valor) {
            return db.execute('SELECT * FROM visitantes WHERE nombre LIKE ?', ['%' + valor + '%'])
        } else {
            return this.fetchAll();
        }
    }
} 