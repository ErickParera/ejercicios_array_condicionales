let numero = Math.floor(Math.random() * 11);
let intento

while (true) {
    intento = parseInt(prompt("Adivina el número entre el 1 y 10:"))

    if (intento === numero) {
        console.log("¡Felicidades! Adivinaste el número.")
        break  
    } else if (intento < numero) {
        console.log("El número es mayor. Intenta de nuevo.")
    } else {
        console.log("El número es menor. Intenta de nuevo.")
    }
}

