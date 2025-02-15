function verificarSuma() {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const resultadoCorrecto = num1 + num2;

    const inicio = new Date();
    const respuestaUsuario = parseInt(prompt(`¿Cuál es el resultado de ${num1} + ${num2}?`));
    const fin = new Date();
    const tiempo = (fin - inicio) / 1000; // Tiempo en segundos

    let mensaje = (respuestaUsuario === resultadoCorrecto) ? "¡Correcto!" : "Incorrecto. La respuesta correcta era " + resultadoCorrecto + ".";
    mensaje += ` Tardaste ${tiempo} segundos. `;

    console.log(mensaje);
}

verificarSuma();