import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//STYLED COMPONENTS
const ContenedorBotones = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 25vw 75vw;
  width: 100%;
  margin-left: 0;
  background-color: rgba(0, 0, 0, 0.85);
  height: 20vh;
  align-items: center;
  justify-items: center;
  h2 {
    font-size: 30px;
    text-align: left;
    height: 40px;
    background-color: rgb(223, 9, 2);
    display: grid;
    padding: 5px;
  }
`;
const BotonCerrarSesion = styled.button`
  font-size: 15px;
  height: 50px;
  width: 150px;
  margin-left: 20px;
  background-color: rgb(223, 9, 2);
  border: 3px solid black;
  font-weight: 700;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: rgb(223, 9, 2);
    border: 3px solid rgb(223, 9, 2);
  }
`;

const HeaderSesion = ({ navegaSesion, datosUsuario, avanzaClase }) => {
  //FUNCION PARA CERRAR SESION
  const cerrarSesion = () => {
    navegaSesion(false);
    avanzaClase(false);
  };

  //EXTRAEMOS EL NOMBRE DEL PROFESOR DE LOS DATOS DE USUARIO
  const { nombre } = datosUsuario;

  return (
    <ContenedorBotones>
      <BotonCerrarSesion onClick={cerrarSesion}>
        CERRAR SESION
      </BotonCerrarSesion>
      <h2>PROFESOR: {nombre} </h2>
    </ContenedorBotones>
  );
};

HeaderSesion.propTypes = {
  navegaSesion: PropTypes.func.isRequired,
  avanzaClase: PropTypes.func.isRequired,
  datosUsuario: PropTypes.object.isRequired,
};

export default HeaderSesion;
