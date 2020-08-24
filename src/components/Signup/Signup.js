import React, { useState, Fragment } from "react";
import Error from "../Error/Error";
import styled from "styled-components";
import Exito from "../Exito/Exito";
import PropTypes from "prop-types";

//STYLED COMPONENTS
const FormCreaUsuario = styled.form`
  width: 500px;
  height: 80vh;
  border: 2px solid rgb(223, 9, 2);
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  align-items: center;
  font-size: 18.5px;
  background-color: rgba(0, 0, 0, 0.75);
  margin: 0 auto;
  h2 {
    text-align: center;
    font-size: 25px;
    color: white;
  }
  input {
    height: 30px;
    width: 80%;
    font-size: 20px;
    margin: 0 auto;
    padding: 10px;
    border: none;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const ButtonForm = styled.button`
  width: 80%;
  height: 40px;
  font-size: 18.5px;
  font-weight: 700;
  margin: 0 auto;
  background-color: rgb(223, 9, 2);
  border: 2px solid black;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: rgb(223, 9, 2);
    border: 2px solid rgb(223, 9, 2);
  }
`;

const Signup = ({
  guardarCargando,
  cargando,
  stateNuevoUsuario,
  guardarError,
  error,
  guardarExito,
  exito,
}) => {
  //STATE PARA EL OBJETO DE PROFESOR
  const [profesor, guardarProfesor] = useState({
    nombre: "",
    contraseña: "",
    email: "",
  });

  //FUNCION QUE COLOCA LOS ELEMENTOS EN EL STATE
  const handleChange = (e) => {
    //ACTUALIZA EL STATE
    guardarProfesor({
      ...profesor,
      [e.target.name]: e.target.value,
    });
  };
  //EXTRAEMOS LOS VALORES DE PROFESOR
  const { nombre, contraseña, email } = profesor;

  //SUBMIT DEL FORMULARIO CON LOS DATOS
  const creaUsuario = (e) => {
    //PARA QUE NO SE RECARGUE LA PAGINA
    e.preventDefault();
    //VALIDACION
    if (
      nombre.trim() === "" ||
      contraseña.trim() === "" ||
      email.trim() === ""
    ) {
      //MOSTRAR ERROR
      guardarError(true);
      return;
    } else {
      //MOSTRAR MENSAJE DE EXITO
      guardarExito(true);
      //MOSTRAR SPINNER
      guardarCargando(true);
      //NO MOSTRAR ERROR
      guardarError(false);

      //GUARDAR USUARIOS EN LOCAL STORAGE
      setTimeout(() => {
        guardarCargando(false);
        localStorage.setItem(email, JSON.stringify(profesor));
        stateNuevoUsuario(false);
        guardarExito(false);
      }, 3000);
    }
  };

  return (
    <Fragment>
      <FormCreaUsuario onSubmit={creaUsuario}>
        {error ? (
          <Error mensaje="COMPLETE TODOS LOS CAMPOS" />
        ) : exito ? (
          <Exito mensaje="USUARIO CREADO" />
        ) : (
          <h2>INGRESE SUS DATOS PARA REGISTRARSE</h2>
        )}
        <input
          autoFocus
          name="nombre"
          value={nombre}
          type="text"
          placeholder="Nombre"
          onChange={handleChange}
        />
        <input
          name="email"
          value={email}
          type="email"
          placeholder="E-mail"
          onChange={handleChange}
        />
        <input
          name="contraseña"
          value={contraseña}
          type="password"
          placeholder="Contraseña"
          onChange={handleChange}
        />
        <ButtonForm type="submit">CREAR USUARIO</ButtonForm>
      </FormCreaUsuario>
    </Fragment>
  );
};

Signup.propTypes = {
  guardarCargando: PropTypes.func.isRequired,
  cargando: PropTypes.bool.isRequired,
  stateNuevoUsuario: PropTypes.func.isRequired,
  guardarError: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  guardarExito: PropTypes.func.isRequired,
  exito: PropTypes.bool.isRequired,
};

export default Signup;
