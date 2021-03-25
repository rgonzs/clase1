const ahora = new Date();
console.log(ahora);

const milisegundos = ahora.getTime();

const fechaCero = new Date(0)
console.log(fechaCero)

const fechaString = new Date("July 25 1821 12:00")
console.log(fechaString)

console.log(fechaString.getFullYear())

console.log(fechaString.getMonth())

console.log(fechaString.getDate())

console.log(fechaString.getDay())