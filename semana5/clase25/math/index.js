/**
 * Calcular el area de un circulo a partir de su radio
 * @param  {[number]} radio [number of radio from circle]
 */
function calcularAreaCirculo(radio) {
  return Math.PI * Math.pow(radio, 2);
}

console.log(calcularAreaCirculo(1));

let numeroMayor = Math.max(1, 2, 3, 4, 5, 6);
console.log(numeroMayor);

let arrayNumeros = [23, 43, 56, 12, 23, 45];
console.log(Math.max(...arrayNumeros));
