console.log("Hola Mundo");

const librero = require("./libros")

librero.map((libro) => {
    console.log(libro)
})


var cowsay = require("cowsay");

console.log(cowsay.say({
	text : "I'm a moooodule",
	e : "oO",
	T : "U "
}));

// or cowsay.think()