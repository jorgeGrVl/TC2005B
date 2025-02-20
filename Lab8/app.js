const calcularPromedio = (arreglo) => {
    let suma = 0;
    for (let item of arreglo) {
        suma += item;
    }
    return suma / arreglo.length;
};

let arreglo = [1, 2, 3, 4, 5];
console.log(calcularPromedio(arreglo))


const escribirEnArchivo = (str) => {
    const file_s = require('fs');
    file_s.writeFileSync('prueba.txt', str);
}

let str = 'Hola'
escribirEnArchivo(str);


const twoSum = (arreglo, target) => {
    let l = 0;
    let r = arreglo.length - 1;
    while (arreglo[l] + arreglo[r] != target) {
        if (l == r - 1) {
            l += 1;
            r = arreglo.length - 1;
        }
        else {
            r -= 1;
        }
    }
    return [l, r];
};

console.log(twoSum(arreglo, 8));