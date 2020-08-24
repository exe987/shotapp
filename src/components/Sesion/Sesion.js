import React, { useState } from "react";
import IngresoJugadores from "../IngresoJugadores/IngresoJugadores";
import styled from "styled-components";
import PropTypes from "prop-types";

//STYLED COMPONENTS
const ContenedorSesion = styled.div`
  width: 100vw;
  height: 80vh;
  display: grid;
  grid-template-rows: 20vh 80vh;
`;

const ContenedorData = styled.div`
  width: 100vw;
  height: 80vh;
  display: grid;
`;
const Sesion = ({ datosUsuario, error, guardarError, clase, avanzaClase }) => {
  //DESTRUCTURING DE LOS DATOS DEL LOCALSTORAGE DEL USUARIO
  const { nombre, contraseña, email } = datosUsuario;

  //STATE CON LOS DATOS DE LA SESION MAS LOS JUGADORES
  const [dataSesion, agregarData] = useState({
    nombre: nombre,
    contraseña: contraseña,
    email: email,
  });

  return (
    <ContenedorSesion>
      <ContenedorData>
        <IngresoJugadores
          agregarData={agregarData}
          dataSesion={dataSesion}
          avanzaClase={avanzaClase}
          error={error}
          guardarError={guardarError}
        />
      </ContenedorData>
    </ContenedorSesion>
  );
};

Sesion.propTypes = {
  datosUsuario: PropTypes.object.isRequired,
  error: PropTypes.bool.isRequired,
  guardarError: PropTypes.func.isRequired,
  clase: PropTypes.bool.isRequired,
  avanzaClase: PropTypes.func.isRequired,
};

export default Sesion;
