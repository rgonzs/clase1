console.log(location);

console.log(location.href);
console.log(location.hostname);
console.log(location.host);

console.log(location.pathname);
console.log(location.protocol);

let contador = 0;

let intervalo = setInterval(() => {
  console.log("Hola mundo");
  contador += 1;
  if (contador===6) {
      clearInterval(intervalo)
  }
}, 2000);
