// Clases

// las clases en js son funciones con sintaxis espacial pero siguen siendo funciones

// funcion

const func = function () {};

// clases

const clase = class {};

console.log(Object.getPrototypeOf(func));
console.log(Object.getPrototypeOf(clase));

const constructorDeUnaFuncion = new func();

const clase2 = new clase();
