let dato = prompt("Ingrese una serie de palabras separadas por una " + "," + " puedes usar las palabras palindromo: oso, arenera, radar, sometemos, somos, reconocer. \n\nUsa tambien las palabras no palindromos como: Animal, vaso, vaca, arena.")
let dato2 = dato.split(",")  
let arraydatocorrecto = []
let arraydatoincorrecto = []

for (let i = 0; i < dato2.length; i++) {  
    let dato3 = dato2[i].trim().toLowerCase()  
    let invertir = dato3.split("").reverse().join("")  

    if (dato3 === invertir) {  
        arraydatocorrecto.push(dato3) 
    } else {  
        arraydatoincorrecto.push(dato3)  
    }
}

console.log("Palabras palíndromas: " + arraydatocorrecto.join(", "))  
console.log("Palabras NO palíndromas: " + arraydatoincorrecto.join(", "))  