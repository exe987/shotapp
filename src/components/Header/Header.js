import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//STYLED COMPONENTS
const ContenedorBotones = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  margin-left: 0;
  background-color: rgba(0, 0, 0, 0.85);
  height: 20vh;
  align-items: center;
`;
const BotonCreaOInicia = styled.button`
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

const Header = ({stateNuevoUsuario, stateInicioSesion, clickInicioSesion, clickNuevoUsuario}) => {
  //FUNCION PARA EL BOTON DE CREAR USUARIO
  const formCreaUsuario = () => {
    if (clickNuevoUsuario === false) {
      stateNuevoUsuario(true);
      stateInicioSesion(false);
    } else {
      stateNuevoUsuario(false);
    }
  };

  //FUNCION PARA INICIAR SESION
  const formInicioSesion = () => {
    if (clickInicioSesion === false) {
      stateInicioSesion(true);
      stateNuevoUsuario(false);
    } else {
      stateInicioSesion(false);
    }
  };

  return (
    <ContenedorBotones>
      <BotonCreaOInicia 
      onClick={formCreaUsuario}>
        CREA UN USUARIO
      </BotonCreaOInicia>
      <BotonCreaOInicia 
      onClick={formInicioSesion}>
        INICIAR SESION
      </BotonCreaOInicia>
    </ContenedorBotones>
  );
};

Header.propTypes = {
  stateNuevoUsuario: PropTypes.func.isRequired,
  stateInicioSesion: PropTypes.func.isRequired,
  clickInicioSesion: PropTypes.bool.isRequired,
  clickNuevoUsuario: PropTypes.bool.isRequired
};

export default Header;
