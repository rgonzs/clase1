// objetos

// es una coleccion de propiedades

// que es una propiedad

// una propiedad esta compeusta de llaves (key) y valores (value)

// es un tipo de datos

let miObjeto = new Object();
miObjeto.nombreDeLaPropiedad; // asi es como yo accedo a una propiedad en mi objeto
miObjeto.propiedad1 = "es un objeto";
miObjeto.propiedad2 = "es otra propiedad";
miObjeto.propiedad3 = "es otra otra propiedad";

let miObjeto2 = {
  nombre: "lomo saltado",
  costo: "20.45",
  rating: [1, 2, 3, 4, 5],
  estDisponible: true,
};

miObjeto2.propiedad10000; // cuando se imprima mostrara undefined
miObjeto["propiedad1"]; // este es valor (solo acceder a mi valor)
miObjeto["propiedad1"] = 45;

let comidaFavorita = new Object();
comidaFavorita.nombre = "lomo saltado";
comidaFavorita.costo = "20.45";
comidaFavorita.rating = [1, 2, 3, 4, 5];
comidaFavorita.estDisponible = true;

// console.log(comidaFavorita["nombre"]);

// comidaFavorita["nombre"] = "pizza";

// console.log(comidaFavorita["nombre"]);

function mostrarPropiedades(objeto, propiedadObjeto) {
  let resultado = "";
  for (const elemento in objeto) {
    if (objeto.hasOwnProperty(elemento)) {
      resultado += `${propiedadObjeto}.${elemento} = ${objeto[elemento]} \n`;
    }
  }
  return resultado;
}

mostrarPropiedades(comidaFavorita, "miNuevoObjeto");

console.log(mostrarPropiedades(comidaFavorita, "miNuevoObjeto"));

function mostrarNombresPropiedadesDelObjeto(objeto) {
  let resultado = "";
  for (const elemento in objeto) {
    resultado += `${elemento} \n`;
  }
  return resultado;
}

console.log(mostrarNombresPropiedadesDelObjeto(comidaFavorita));

let objetoPrueba = {
  nombre: "lomo saltado",
  costo: "20.45",
  rating: [1, 2, 3, 4, 5],
  estDisponible: true,
};

function mostrarValores(objeto) {
  let result = "";

  for (i in objeto) {
    console.log(i);
    result += `${objeto[i]}\n`;
  }
  return result;
}

console.log(mostrarValores(objetoPrueba));

function Carro(marca, modelo, anio) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
}

let mechitaBenz = new Carro("Mercedes Benz", "el ultimo", 2077)
console.log(mechitaBenz.anio)
mechitaBenz.marca
