// for (let numero = 0; numero < 300; numero++) {
//   if (numero % 2 === 0) {
//     console.log(numero);
//   }
// }

// for (let numero = 0; numero <= 1000; numero++) {
//   if (numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0 ) {
//     console.log(numero)
//   }
// }
let suma = 0
for (let numero = 0; numero < 1000; numero++) {
  
  if (numero % 3 === 0 || numero % 5 === 0) {
    suma = suma + numero
    console.log(numero)
  }
  
}
console.log(suma)