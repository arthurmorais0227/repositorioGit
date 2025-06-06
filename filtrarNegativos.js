function filtrarNegativos(numeros) {
    let arrayNegativos = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            arrayNegativos.push(numeros[i]);
        }
    }

    return console.log(`Os números negativos são: ${arrayNegativos.join(', ')}`);
}

filtrarNegativos([-10, 10, -20, 20, -30, 30]);