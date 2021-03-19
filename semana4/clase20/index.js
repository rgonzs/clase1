let alumnos_favoritos = [
  "Cristiano",
  "Messi",
  "Maradona",
  "Peter",
  "Pele",
  "Iniesta",
];
let informacion = "Mis alumnos favoritos son : ";

const texto = document.querySelector("p");

for (let indice = 0; indice < alumnos_favoritos.length; indice++) {
  informacion += alumnos_favoritos[indice] + ", ";
}

texto.textContent = informacion;

let arrayLetras = [
  "palabra-a",
  "palabra-e",
  "palabra-i",
  "palabra-o",
  "palabra-u",
];
let fraseVocales = "Mis vocales son: ";
const miTitulo = document.querySelector("h1");
const letras = document.getElementById("letras");

for (let i = 0; i < arrayLetras.length; i++) {
  fraseVocales = fraseVocales + arrayLetras[i] + " ";
  setTimeout(() => (letras.innerHTML += `<p>${arrayLetras[i]}</p>`), 1000 * i);
}
miTitulo.textContent = fraseVocales;
