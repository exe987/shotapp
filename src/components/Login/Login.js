import React, { useState } from "react";
import styled from "styled-components";
import Error from "../Error/Error";
import PropTypes from "prop-types";

//STYLED COMPONENTS

const FormInicioSesion = styled.form`
  width: 500px;
  height: 80vh;
  border: 2px solid rgb(223, 9, 2);
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
  font-size: 18.5px;
  background-color: rgba(0, 0, 0, 0.75);
  margin: 0 auto;
  @media (max-width: 700px) {
    width: 100%;
  }
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

const Login = ({
  error,
  guardarError,
  navegaSesion,
  guardarCargando,
  cargando,
  guardarDatos,
  avanzaClase,
}) => {
  //STATE PARA DATOS INGRESADOS POR EL USUARIO
  const [datos, datosIngresados] = useState({
    email: "",
    password: "",
  });

  //FUNCION QUE COLOCA LOS ELEMENTOS EN EL STATE
  const handleChange = (e) => {
    //ACTUALIZA EL STATE
    datosIngresados({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  //EXTRAEMOS LOS VALORES DE LOS DATOS INGRESADOS
  const { email, password } = datos;

  //SUBMIT
  const iniciarSesion = (e) => {
    //PARA QUE NO SE RECARGUE LA PAGINA
    e.preventDefault();
    //
    //VALIDACION DE USUARIO
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      localStorage.getItem(email) === null
    ) {
      //EN CASO DE QUE NO EXISTA USUARIO MOSTRAR ERROR
      guardarError(true);
      return;
    } else {
      /*SI EL USUARIO EXISTE VALIDAR CONTRASEÑA EXTRAYENDO EL OBJETO DE ESE USUARIO DEL LOCAL STORAGE
      Y HACIENDO EL DESTRUCTURING DEL MISMO PARA COMPARAR CONTRASEÑAS*/
      const data = localStorage.getItem(email);
      const dataStorage = JSON.parse(data);
      //EXTRAEMOS LOS VALORES DEL OBJETO DEL STORAGE PARA VALIDACION
      const { contraseña } = dataStorage;
      //COMPROBAR CONTRASEÑA
      if (password !== contraseña) {
        guardarError(true);
        return;
      } else {
        //MOSTRAR SPINNER
        guardarCargando(true);

        //SI LOS EL PROFESOR YA TENIA ALUMNOS CARGADOS PASAR A LA CLASE DIRECTAMENTE
        if (dataStorage.hasOwnProperty("jugador1")) {
          setTimeout(() => {
            guardarDatos(dataStorage);
            navegaSesion(true);
            avanzaClase(true);
            guardarCargando(false);
          }, 2000);
        } else {
          //INICIA SESION
          setTimeout(() => {
            guardarDatos(dataStorage);
            navegaSesion(true);
            guardarCargando(false);
          }, 3000);
        }
      }
    }
  };
  return (
    <FormInicioSesion onSubmit={iniciarSesion}>
      {error ? (
        <Error mensaje="INGRESE SUS DATOS CORRECTAMENTE" />
      ) : (
        <h2>INICIA SESION</h2>
      )}
      <input
        type="email"
        placeholder="E-mail"
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        onChange={handleChange}
      />
      <ButtonForm type="submit">INICIA SESION</ButtonForm>
    </FormInicioSesion>
  );
};

Login.propTypes = {
  error: PropTypes.bool.isRequired,
  guardarError: PropTypes.func.isRequired,
  navegaSesion: PropTypes.func.isRequired,
  cargando: PropTypes.bool.isRequired,
  guardarDatos: PropTypes.func.isRequired,
  avanzaClase: PropTypes.func.isRequired,
};

export default Login;
