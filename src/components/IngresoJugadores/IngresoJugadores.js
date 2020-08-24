import React, { useState } from "react";
import Error from "../Error/Error";
import Spinner from "../Spinner/Spinner";
import styled from "styled-components";
import PropTypes from "prop-types";

//STYLED COMPONENTS
const FormJugadores = styled.form`
  width: 80%;
  height: auto;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-rows: 10vh, repeat(12, 5vh), 10vh;
  align-items: center;
  input {
    width: 80%;
    margin: 0 auto;
    height: 20px;
    font-size: 15px;
    padding: 5px;
    align-items: center;
  }
  h2 {
    font-size: 30px;
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: rgb(223, 9, 2);
    display: grid;
  }
  button {
    width: 80%;
    margin: 0 auto;
    height: 30px;
    font-size: 20px;
    padding: 5px;
    background-color: rgb(223, 9, 2);
    border: 3px solid black;
    font-weight: 700;
    &:hover {
      cursor: pointer;
      background-color: black;
      color: rgb(223, 9, 2);
      border: 3px solid rgb(223, 9, 2);
    }
  }
`;

const IngresoJugadores = ({
  agregarData,
  dataSesion,
  avanzaClase,
  error,
  guardarError,
}) => {
  //STATE OBJETO DE JUGADORES
  const [jugadores, agregarJugadores] = useState({});

  //STATE DE SPINNER DE CARGA
  const [cargando, guardarCargando] = useState(false);

  //FUNCION QUE COLOCA LOS ELEMENTOS EN EL STATE
  const handleChange = (e) => {
    //ACTUALIZA EL STATE DE DATA PARA GUARDAR ESOS DATOS EN EL LOCALSTORAGE
    agregarData({
      ...dataSesion,
      [e.target.name]: e.target.value,
    });

    //JUGADORES PARA PASAR AL COMPONENTE HIJO Y TRABAJAR CON ELLOS
    agregarJugadores({
      ...jugadores,
      [e.target.name]: e.target.value,
    });
  };

  //SUBMIT DE DATOS INGRESADOS
  const ingresaJugadores = (e) => {
    //PARA QUE NO SE RECARGUE LA PAGINA
    e.preventDefault();
    //SI NO INGRESAMOS LOS 12 JUGADORES DARA ERROR
    if (Object.keys(jugadores).length !== 12) {
      guardarError(true);
      return;
    } else {
      //MOSTRAR SPINNER
      guardarCargando(true);
      //EXTRAER EMAIL DEL OBJETO DATASESION
      const { email } = dataSesion;
      //INICIA SESION
      setTimeout(() => {
        //GUARDAMOS ALUMNOS Y DATOS DEL PROFESOR EN LOCALSTORAGE
        localStorage.setItem(email, JSON.stringify(dataSesion));
        //AVANZAMOS A LA CLASE
        avanzaClase(true);
        //OCULTAMOS SPINNER
        guardarCargando(false);
      }, 3000);
    }
  };

  return (
    <FormJugadores onSubmit={ingresaJugadores}>
      {error ? (
        <Error mensaje="INGRESA LOS 12 JUGADORES!!!" />
      ) : (
        <h2>INGRESA JUGADORES</h2>
      )}

      <input
        type="text"
        name="jugador1"
        onChange={handleChange}
        placeholder="JUGADOR 1"
      />
      <input
        type="text"
        name="jugador2"
        onChange={handleChange}
        placeholder="JUGADOR 2"
      />
      <input
        type="text"
        name="jugador3"
        onChange={handleChange}
        placeholder="JUGADOR 3"
      />
      <input
        type="text"
        name="jugador4"
        onChange={handleChange}
        placeholder="JUGADOR 4"
      />
      <input
        type="text"
        name="jugador5"
        onChange={handleChange}
        placeholder="JUGADOR 5"
      />
      <input
        type="text"
        name="jugador6"
        onChange={handleChange}
        placeholder="JUGADOR 6"
      />
      <input
        type="text"
        name="jugador7"
        onChange={handleChange}
        placeholder="JUGADOR 7"
      />
      <input
        type="text"
        name="jugador8"
        onChange={handleChange}
        placeholder="JUGADOR 8"
      />
      <input
        type="text"
        name="jugador9"
        onChange={handleChange}
        placeholder="JUGADOR 9"
      />
      <input
        type="text"
        name="jugador10"
        onChange={handleChange}
        placeholder="JUGADOR 10"
      />
      <input
        type="text"
        name="jugador11"
        onChange={handleChange}
        placeholder="JUGADOR 11"
      />
      <input
        type="text"
        name="jugador12"
        onChange={handleChange}
        placeholder="JUGADOR 12"
      />
      <button type="submit">INGRESAR JUGADORES</button>
      {cargando ? <Spinner /> : null}
    </FormJugadores>
  );
};

IngresoJugadores.propTypes = {
  agregarData: PropTypes.func.isRequired,
  dataSesion: PropTypes.object.isRequired,
  avanzaClase: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  guardarError: PropTypes.func.isRequired
};

export default IngresoJugadores;
