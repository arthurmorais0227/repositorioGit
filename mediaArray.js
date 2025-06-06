function calcularMedia(numeros){
    if (numeros.length === 0){
        return 0;
    }

    let soma = 0;
    for (let i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }
    return soma / numeros.length;
}

const number = [5, 3, 3, 2, 5];
console.log(calcularMedia(number));