import React from "react";
import "./styles.css"
import Aside from './../Aside/Aside';
import Content from "../Content/Content";
// import Imagen from "../Imagen/Imagen";

const Home = () => {
  return (
    <>
    <div className="container">
      <Content/>
      <Aside/>
    </div>
    </>
  );
};

export default Home;
