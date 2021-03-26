const ahora = new Date();
console.log(ahora);

const milisegundos = ahora.getTime();

const fechaCero = new Date(0);
console.log(fechaCero);

const fechaString = new Date("July 25 1821 12:00");
console.log(fechaString);

console.log(fechaString.getFullYear());

console.log(fechaString.getMonth());

console.log(fechaString.getDate());

console.log(fechaString.getDay());

function obtenerTiempo(fechaNacimiento) {
  let cumple = {
    dia: 0,
    mes: 0,
    anho: 0,
  };
  const fechaActual = new Date();
  fechaNacimiento = new Date(fechaNacimiento);
  const anho = +(fechaActual.getFullYear() - fechaNacimiento.getFullYear());
  const mes = fechaNacimiento.getMonth()
  const dia = fechaNacimiento.getDate();

  cumple.anho = anho;
  cumple.mes = mes;
  cumple.dia = dia;

  return `
    dia: ${cumple.dia},
    mes: ${cumple.mes},
    anho: ${cumple.anho},
    `;
}

console.log(obtenerTiempo("July 28 2000 12:00"))
