//Window 

console.log(location)
console.log("Esta es la URL de la pagina: ", location.href);
console.log("Este es el hostname de mi servidor ", location.hostname);
console.log("Este es el host ", location.host);
console.log("Este es mi path (ruta/camino) ", location.pathname);
console.log("Este es mi protocolo ", location.protocol);

let intervalo = setInterval(() => {
    console.log("Hola amigo")
    console.log(contador ++);
    if(contador === 6){
        clearInterval(intervalo)
    }
}, 1000)
let contador = 0


setTimeout(() => {
    console.log("Esta es la ejecución de ");
}, 2000)


//localStorage
//almacenamiento local

window.localStorage.setItem("password","123456", "usuario", "gabriel")
console.log(window.localStorage.getItem("password"))
//Con el window.localStorage.clear limpio los datos del 
//LocalStorage
//window.localStorage.clear()


if(window.confirm("¿Deseas eliminar todas las variables guardadas en el local storage?")){
    alert("Las variables han sido eliminadas")
}