let resultado = 0;

while (resultado < 100) {
    let dato = parseInt(prompt("Ingresa un numero del 1 al 100"));
    if (!isNaN(dato)) {
        resultado += dato
    } else {
        console.log("El numero que ingresaste no cumple con los requerimientos, elige un numero del 1 al 100, intentalo nuevamente.");
    }
}

console.log("El resultado es: ", resultado)

