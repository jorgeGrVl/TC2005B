function promedios(matriz) {
    return matriz.map(renglon => {
        const suma = renglon.reduce((acc, num) => acc + num, 0);
        return suma / renglon.length;
    });
}

// Pruebas
console.log(promedios([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [2, 5, 8]
console.log(promedios([[10, 20], [30, 40, 50]])); // [15, 40]
console.log(promedios([[0, 0, 0], [1, 1, 1]])); // [0, 1]
console.log(promedios([[-1, 0, 1], [-2, 0, 2]])); // [0, 0]