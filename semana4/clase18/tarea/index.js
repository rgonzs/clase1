let songs = document.querySelector("select");
let title = document.querySelector("h1");
let letraCancion = document.querySelector("p");

function getselector() {
  selector = songs.value;

  if (selector === "cancion1") {
    title.textContent = "Decir adiós";
    letraCancion.textContent = `Decir adiós Fue difícil para mi Porque te quise Desde que te conoci Estoy aqui Pensando solo en ti Y tus recuerdos Lo son todo para mi De que sirve querer Si después vas a fallar No quise terminar Pero lo tengo que aceptar Tu ausencia ya Puso en llanto mi corazón Con el recuerdo que tuvimos tu y yo Pasaran los dias y tu voz Quedara en cada rincon Y esos susurros cuando haciamos el amor Difícil de pensar Que ya nunca volveras Tus alas volaran Y en otro cielo sufriran`;
  } else if (selector === "cancion2") {
    title.textContent = "Pink Floyd - Eclipse";
    letraCancion.textContent = `All that you touch And all that you see All that you taste All you feel And all that you love And all that you hate All you distrust All you save And all that you give And all that you deal And all that you buy Beg, borrow or steal And all you create And all you destroy And all that you do And all that you say And all that you eat And everyone you meet (everyone you meet) And all that you slight And everyone you fight And all that is now And all that is gone And all that's to come And everything under the sun is in tune But the sun is eclipsed by the moon`;
  } else if (selector === "cancion3") {
    title.textContent = "Fin del tiempo";
    letraCancion.textContent = `Fin Del tiempo para el que no ve Para el que duda y miente Y cree que se salvara Fe No se encuentra en lo material Es una escala espiritual Que aún nos falta conocer Libre Sólo serás con verdad Perdona y aprende a pedir perdón Eso es libertad No mires más Lo que te daña Porque no es una aventura Es tu vida real Cambiemos El mundo con unión Pensemos con el corazón La mejor forma de pensar`;
  } else if (selector === "cancion4") {
    title.textContent = "Last train to london - Electric Light Orchestra";
    letraCancion.textContent = `It was nine twenty-nine Nine twenty-nine, back street, big city The sun was going down There was music all around, it felt so right It was one of those nights One of those nights when you feel the world stop turning You were standing there There was music in the air I should have been away But I knew I had to stay Last train to London Just heading out Last train to London Just leaving town But I really want tonight to last forever I really wanna be with you Let the music play on down the line tonight`;
  } else if (selector === "cancion5") {
    title.textContent = "Sed";
    letraCancion.textContent = `Tengo sed te nesecito para beber tu sangre y convertirme en parte de ti y ser algo o parte almenos porque no soy nada nos soy nada escribiendo lo vivido soy sudor y lagrimas no soy nada ante un todo que me mata quiero tu sangre porque muero porque muero`;
  } else if (
    selector === "" ||
    selector === undefined ||
    selector === "undefined" ||
    selector === NaN
  ) {
    title.textContent = "";
    letraCancion.textContent = "";
    return "Debes ingresar un nombre valido";
  } else {
    letraCancion.textContent = "Voy a seguir durmiendo";
    return "Voy a seguir durmiendo";
  }
}

songs.addEventListener("change", getselector);
