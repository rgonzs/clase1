"use strict;";
// let nombre = "Renato";
// let sistema = "WSL";
// console.log(typeof nombre);

// console.log(
//   `Mi segundo nombre es  ${nombre} y mi sistema operativo es ${sistema}`
// );

// let miEdad = 24;
// let miPeso = 80.5;

// let altura = 1.75;
// let peso = 90.5;

// //bmi = indice de masa corporal
// let bmi = peso / altura ** 2;
// document.write(bmi + "<br>");
// let a = 4;
// let b = 2;
// let potenciacion = a ** b;
// document.write(potenciacion);
// let radicacion = a % 0.5;

// Declarar variable de la formula de C° a F°

// De Celsius a Farenheit
let celsius = 32;
let farenheit = celsius * (9 / 5) + 32;
console.log(`De Celsius a Farenheit: ${farenheit}`);
// De farenheit a Celsius
let finalCelsius = (farenheit - 32) * (5 / 9);
console.log(`De Farenheit a Celsius: ${finalCelsius}`);

//JSON --> Javascript Object Notation

let json2 = {
  propiedad6: 123,
};

let json = {
  propiedad1: "Valor texto",
  propiedad2: 34,
  propiedad3: true,
  propiedad4: json2,
};

let misDatos = {
  nombre: "Renato",
  apellido: "Gonzales",
  hobbie: "ver videos",
  mascotas: 0,
  hombre: true,
  mujer: false,
  apellidoMaterno: "Castro",
};

console.log(`Bienvenido ${misDatos.nombre} ${misDatos.apellido} `);

let a = 12
let b = 10
let c = 5
let x = ((-b + 0.5 ** (b ** 2 - 4 * a * c)) / 2) * a;
console.log(x)
