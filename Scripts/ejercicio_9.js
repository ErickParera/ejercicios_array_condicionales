let edad = [18, 25, 14, 32, 16, 40];

edad.forEach(mayordeedad => {
    if(mayordeedad > 30) {
        console.log("Mayor de edad: " + mayordeedad)
    }    
});

edad.forEach(menordeedad => {
    if(menordeedad < 30) {
        console.log("Menor de edad: " + menordeedad)
    }    
});