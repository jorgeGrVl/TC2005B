class Calculadora {
    constructor() {
        this.historial = [];
    }

    suma(a, b) {
        const resultado = a + b;
        this.registrarOperacion(`Suma: ${a} + ${b} = ${resultado}`);
        return resultado;
    }

    potencia(base, exponente) {
        const resultado = Math.pow(base, exponente);
        this.registrarOperacion(`Potencia: ${base}^${exponente} = ${resultado}`);
        return resultado;
    }

    registrarOperacion(operacion) {
        this.historial.push(operacion);
    }

    mostrarHistorial() {
        return this.historial;
    }
}

// Pruebas
const calc = new Calculadora();
console.log("Suma: 3 + 4 = " + calc.suma(3, 4)); // 7
console.log("Potencia: 2^3 = " + calc.potencia(2, 3)); // 8
console.log("Historial de operaciones:");
console.log(calc.mostrarHistorial());