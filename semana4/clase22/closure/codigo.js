//scope - espacio disponible que esta entre llaves
function texto() {
  function mostrarTexto(texto) {
    alert(texto);
  }
  mostrarTexto();
}

function crearFuncion() {
  let nombre = "Pablo";
  function mostrarNombre() {
    alert(nombre);
  }
  return mostrarNombre;
}

let llamarMiFuncion = crearFuncion();
llamarMiFuncion();

function sumadorDeNumeros(x) {
  return (y) => x + y;
}

let suma5 = sumadorDeNumeros(5);
console.log(suma5(2));

let suma10 = sumadorDeNumeros(10);
console.log(suma10(2));