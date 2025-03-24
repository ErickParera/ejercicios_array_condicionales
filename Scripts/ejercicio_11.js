let dato = prompt("Ingrese una palabra u oracion y validaremos cuales y cuantas vocales hay");
let vocales = ["a", "e", "i", "o", "u"]
let vocales_encontradas = []

for (let i = 0; i < dato.length; i++) {  
    if (vocales.includes(dato[i])) { 
        vocales_encontradas.push(dato[i]) 
    }
}

let no_repetir = [...new Set(vocales_encontradas)]

console.log("Vocales encontradas: " + no_repetir.join(", "))
console.log("Cantidad de vocales: " + vocales_encontradas.length)