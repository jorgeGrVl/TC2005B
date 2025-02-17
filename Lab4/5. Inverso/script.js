function inverso(numero) {
    const esNegativo = numero < 0;
    const numeroAbs = Math.abs(numero).toString().split('').reverse().join('');
    const resultado = parseInt(numeroAbs) * (esNegativo ? -1 : 1);
    return resultado;
}

// Pruebas
console.log(inverso(123)); // 321
console.log(inverso(-456)); // -654
console.log(inverso(100)); // 1
console.log(inverso(0)); // 0
console.log(inverso(7890)); // 987