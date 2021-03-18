// cancion = "cancion1";
// if (cancion == "cancion1") {
//   console.log("Cancion 1 letra");
// } else if (cancion == "cancion2") {
//   console.log("Cancion 2 letra");
// } else if (cancion == "cancion3") {
//   console.log("Cancion 3 letra");
// } else {
//   console.log("no hay pe");
// }

function miFuncion() {
  console.log("Llamada de Funcion 1");
  console.log("Llamada de Funcion 2");
  console.log("Llamada de Funcion 3");
}

function printName(name) {
  let miNombre;
  if (
    name === "" ||
    name === undefined ||
    name === "undefined" ||
    name === "None"
  ) {
    miNombre = "Debes ingresar un nombre valido";
  } else {
    miNombre = `Mi nombre es ${name}.`;
  }
  return miNombre;
}

let seleccionar = document.querySelector("select");
let parrafo = document.querySelector("p");
console.log(seleccionar);

function frasesClimas() {
  clima = seleccionar.value;

  if (clima === "nublado") {
    parrafo.textContent = "Este dia esta nublado";
    return "Este dia esta nublado";
  } else if (clima === "soleado") {
    parrafo.textContent = "Este dia esta soleado";
    return "Este dia esta soleado";
  } else if (clima === "lluvioso") {
    parrafo.textContent = "Este dia esta lloviendo";
    return "Este dia esta lloviendo";
  } else if (clima === "templado") {
    parrafo.textContent = "Este clima es muy agradable";
    return "Este clima es muy agradable";
  } else if (
    clima === "" ||
    clima === undefined ||
    clima === "undefined" ||
    clima === NaN
  ) {
    return "Debes ingresar un nombre valido";
  } else {
    parrafo.textContent = "Voy a seguir durmiendo";
    return "Voy a seguir durmiendo";
  }
}

seleccionar.addEventListener("change", frasesClimas);
