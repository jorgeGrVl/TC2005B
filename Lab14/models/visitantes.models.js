const visitantes = [];

module.exports = class Visitante {

    constructor(mi_nombre) {
        this.nombre = mi_nombre;
    }

    save() {
        visitantes.push(this);
    }

    static fetchAll() {
        return visitantes;
    }

} 