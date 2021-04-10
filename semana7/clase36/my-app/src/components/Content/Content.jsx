import React, { useState } from "react";
import foto from "../../assets/images/foto.jpg";
import "./styles.css";

const Content = () => {
  // const [subtitulo, actualizarValor] = useState("Subtitulo inicial");
  const [entradas, setEntrada] = useState([
    {
      titulo: "Lomo Saltado",
      body: "Uno de los platos emblematicos del peru",
      chef: "Elvert",
      id: "1",
    },
    {
      titulo: "Pollo a la brasa",
      body: "Otro de los platos emblematicos del peru",
      chef: "Pedro",
      id: "2",
    },
    {
      titulo: "Ceviche",
      body: "Otro x2 de los platos emblematicos del peru",
      chef: "Juan",
      id: "3",
    },
  ]);

  const [likes, likeController] = useState(0);

  // let subtitulo = "Un subtitulo general";
  // const handleClick = (saludo) => {
  //   console.log(saludo);
  //   console.log(subtitulo, "valor previo");
  //   actualizarValor("un subtitulo de la prensa");
  //   console.log(subtitulo, "valor actual");
  // };

  const Saludo = () => <p>Hola pe kgadas</p>;
  const addLikes = () => {
    likeController(likes + 1);
  };

  return (
    // <div>
    //   <h3>Bienvenid@s a mi publicacion</h3>
    //   <h4>{subtitulo}</h4>

    //   <p style={{ width: "50%" }}>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quia
    //     magnam. Animi, vero inventore laudantium error sit voluptate. Ad alias
    //     necessitatibus consectetur sit facere dignissimos harum cupiditate, cum
    //     et quam.
    //     <img src={foto} alt="foto" id="foto" />
    //   </p>

    //   <Saludo />
    //   <button
    //     onClick={() => {
    //       handleClick("Hola amigos");
    //     }}
    //   >
    //     Leer Entrada
    //   </button>
    // </div>
    <div className="content-1">
      {entradas.map((entrada) => (
        <div className="content-preview" key={entrada.id}>
          <h3>Bienvenidos a mi publicacion: </h3>
          <h2>{entrada.titulo}</h2>
          <p>Escrito por la/el chef: {entrada.chef}</p>
          <button onClick={() => addLikes()}>Like</button>
          <p>Cantidad de likes: {likes}</p>
        </div>
      ))}
    </div>
  );
};

export default Content;
