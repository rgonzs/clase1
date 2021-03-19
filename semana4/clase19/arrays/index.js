let arregloDeNumeros = [1, 2, 3, 4, 5];

let alumnosCodigo = ["pepito", "maria", "juan", "jose"];

let miSuerte = [true, false, true, true, false];

let variosElementos = ["josue", 23, "soltero", 1.7, true, undefined];
console.log(variosElementos[1])


variosElementos.push("elemento6");
console.log("el ultimo elemento es: ", variosElementos[variosElementos.length - 1]);
variosElementos.pop()
variosElementos.unshift("añadido1")
console.log("el primer elemento es: ", variosElementos[0]);
variosElementos.shift()
console.log("el primer elemento es: ", variosElementos[0]);

console.log("el primer elemento es: ", variosElementos[2]);