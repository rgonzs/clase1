const resultado = document.getElementById("resultado");

function cuadratica(a, b, c) {
  let x = ((-b + 0.5 ** (b ** 2 - 4 * a * c)) / 2) * a;
  return x;
}

resultado.textContent = cuadratica(2, 6, 5);

function tarea(a, b) {
  let result =
    a ** 4 + 4 * a * 3 * b + 6 * a * 2 * b * 2 + 4 * a * b * 3 + b * 4;
  return result;
}

document.write(`<p>${tarea(1, 2)}</p>`);

//funcion recursiva
function recursividad(x) {
  if (x >= 10) {
    return;
  }
  console.log(x);
  recursividad(x + 1);
}
// recursividad(0)

//funciones anidadas
function sumarCuadrados(a, b) {
  function cuadrado(x) {
    return x * x;
  }
  return cuadrado(a) + cuadrado(b);
}

// console.log(sumarCuadrados(2,3))
const binomioDeNewton4 = function (a, b) {
  function sumaCuarta(a, b) {
    return a ** 4 + b ** 4;
  }
  function sumaCubo(a, b) {
    return 4 * (a ** 3 * b) + 4 * (a * b ** 3);
  }
  function multiCuadrado(a, b) {
    return 6 * (a ** 2 * b ** 2);
  }
  return sumaCuarta(a, b) + sumaCubo(a, b) + multiCuadrado(a, b);
};

console.log(binomioDeNewton4(1, 2));

function mostrarSaludo(mensaje1, mensaje2) {
  function mostrarSaludo1(mensaje1) {
    return mensaje1;
  }
  function mostrarSaludo2(mensaje2) {
    return mensaje2;
  }
  return mostrarSaludo1(mensaje1) + " " + mostrarSaludo2(mensaje2);
}

mostrarSaludo("saludo 1", "saludo 2");
