let numeros = [23, 45, 12, 67, 34, 89, 21];
let numero_alto = numeros[5];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numero_alto) {
        numero_alto = numeros[5]
    }
}

console.log("El número más grande es:", numero_alto)