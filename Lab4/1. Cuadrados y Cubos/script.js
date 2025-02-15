function generarTabla(numero) {
    if (isNaN(numero) || numero < 1) {
        console.log("Por favor ingresa un número válido mayor a 0.");
        return;
    }
    console.log("Número | Cuadrado | Cubo");
    for (let i = 1; i <= numero; i++) {
        console.log(`${i} | ${i ** 2} | ${i ** 3}`);
    }
}

const numero = parseInt(prompt("Ingresa un número:"));
generarTabla(numero);