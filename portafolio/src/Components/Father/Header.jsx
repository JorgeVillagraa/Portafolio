import React from "react";
import NavBar from'../Nav.jsx';
function Header(){
  return (
    
    <div>
        <NavBar/>
    <div className="Header">
      <h1>Hola Soy Jorge Villagra</h1>
      <div className="foto"></div>
      <h2> Bienvenido a mi Portafolio</h2>
      <h2>Soy Tecnico Universitario en Programacion</h2>
      <p className="pheader">si Quieres saber mas de mi presiona el siguiente boton para abrir mi cv</p>
      <button onClick={() => window.open('cv.pdf', '_blank')}>Abrir CV </button>
      </div>
      </div>
  );
}
export default Header;
