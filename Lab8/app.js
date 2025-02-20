const calcularPromedio = (arreglo) => {
    let suma = 0;
    for (let item of arreglo) {
        suma += item;
    }
    return suma / arreglo.length;
};

const arreglo = [1, 2, 3, 4, 5];
console.log(calcularPromedio(arreglo))


const escribirEnArchivo = (str) => {
    const file_s = require('fs');
    file_s.writeFileSync('prueba.txt', str);
}

let str = 'Hola'
escribirEnArchivo(str);