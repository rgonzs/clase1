cancion = "cancion1";
if (cancion == "cancion1") {
  console.log("Cancion 1 letra");
} else if (cancion == "cancion2") {
  console.log("Cancion 2 letra");
} else if (cancion == "cancion3") {
  console.log("Cancion 3 letra");
} else {
  console.log("no hay pe");
}

function miFuncion() {
  console.log("Llamada de Funcion 1");
  console.log("Llamada de Funcion 2");
  console.log("Llamada de Funcion 3");
}

function printName(name) {
  let miNombre;
  if (name === "" || name === undefined || name === "undefined" || name === "None") {
    miNombre = "Debes ingresar un nombre valido";
  } else {
    miNombre = `Mi nombre es ${name}.`;
  }
  return miNombre;
}

console.log(printName("Renato"));
console.log(printName("None"));
console.log(printName());
