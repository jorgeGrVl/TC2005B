function contador(arr) {
    let negativos = 0, ceros = 0, positivos = 0;
    arr.forEach(num => {
        if (num < 0) negativos++;
        else if (num === 0) ceros++;
        else positivos++;
    });
    return { negativos, ceros, positivos };
}

// Pruebas
console.log(contador([1, -2, 0, 3, -4, 5, 0])); // { negativos: 2, ceros: 2, positivos: 3 }
console.log(contador([0, 0, 0])); // { negativos: 0, ceros: 3, positivos: 0 }
console.log(contador([-1, -2, -3])); // { negativos: 3, ceros: 0, positivos: 0 }
console.log(contador([4, 5, 6])); // { negativos: 0, ceros: 0, positivos: 3 }