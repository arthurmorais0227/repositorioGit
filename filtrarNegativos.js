function filtrarNegativos(numeros) {
    let arrayNumeros = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            arrayNumeros.push(numeros[i]);
        }
    }

    return console.log(`Os números negativos são: ${arrayNumeros.join(', ')}`);
}

filtrarNegativos([-10, 10, -20, 20, -30, 30]);