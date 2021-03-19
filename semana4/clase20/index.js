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
let suma = 0;
for (let numero = 0; numero < 1000; numero++) {

  if (numero % 3 === 0 || numero % 5 === 0) {
    suma = suma + numero
    console.log(numero)
  }

}
let suma2 = 0;
let numero2 = 0;

while (numero2 < 1000) {
  if (numero2 % 3 === 0 || numero2 % 5 === 0) {
    suma2 = suma2 + numero2;
    console.log(numero2);
  }
  numero2++
}
console.log(suma2);
