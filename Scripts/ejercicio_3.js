let dato = parseInt(prompt("Ingresa un numero del 1 al 100"));

for (let i = 1; i <= 10; i++) {  
    let resultado = dato * i
    
    if (resultado > 1000) {  
        break
    }

    console.log(`${dato} x ${i} = ${resultado}`)
}