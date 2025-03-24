let dato = parseInt(prompt("Ingresa un numero que sea positivo"))  
let invertirlo = 0 

while (dato > 0) { 
    let paso1 = dato % 10  
    invertirlo = invertirlo * 10 + paso1  
    dato = Math.floor(dato / 10)  
}

console.log("Número invertido:", invertirlo) 