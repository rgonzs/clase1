//callbacks

function mostrarAlerta() {
  alert("Hola!!!");
}

const boton = document.querySelector("button");

// boton.addEventListener('click', mostrarAlerta)

boton.addEventListener("click", function () {
  alert("Hey funcion Anonima");
});

let segundos = 2;

function empezarCuentaAtras() {
  let time = setInterval(function () {
    segundos--;
    imprimirSegundos();
    if (segundos === 0) {
      clearInterval(time);
    }
  }, 2000);
}

function imprimirSegundos() {
  console.log(segundos);
}

empezarCuentaAtras();
