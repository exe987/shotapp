import React, { useState, Fragment } from "react";
import styled from "styled-components";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Header from "./components/Header/Header";
import HeaderSesion from "./components/HeaderSesion/HeaderSesion";
import Sesion from "./components/Sesion/Sesion";
import DatosJugador from "./components/DatosJugador/DatosJugador";
import Spinner from "./components/Spinner/Spinner";

//STYLED COMPONENTS
const Contenedor = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 20vh 80vh;
  overflow: hidden;
  @media (max-width: 990px) {
    height: auto;
    overflow-y: scroll;
  }
`;

const ContenedorIndex = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  h1 {
    font-size: 100px;
    width: 100%;
    text-align: center;
    height: 80vh;
    background-color: rgb(223, 9, 2);
    display: grid;
    align-items: center;
  }
  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: auto;
    h1 {
      font-size: 50px;
      height: 20vh;
    }
  }
`;

function App() {
  //STATE USUARIOS DE APP
  const [datosUsuario, guardarDatos] = useState({});
  //STATE DE EXITO DE CARGA
  const [exito, guardarExito] = useState(false);
  //STATE PARA FORMULARIO NUEVO USUARIO
  const [clickNuevoUsuario, stateNuevoUsuario] = useState(false);
  //STATE PARA FORMULARIO INICIO SESION
  const [clickInicioSesion, stateInicioSesion] = useState(false);
  //STATE DE SESION INICIADA
  const [sesion, navegaSesion] = useState(false);
  //STATE PARA INICIAR CLASE UNA VEZ TENGAMOS LA CANTIDAD DE JUGADORES O SI EL PROFESOR YA CONTABA CON ELLOS
  const [clase, avanzaClase] = useState(false);
  //STATE DE TIROS
  const [tiros, guardarTiro] = useState([]);
  //STATE DE SPINNER DE CARGA
  const [cargando, guardarCargando] = useState(false);
  //STATE PARA POSIBLES ERRORES
  const [error, guardarError] = useState(false);
 
  //FUNCION PARA QUITAR EL ERROR HACIENDO CLICK EN CUALQUIER PARTE DEL CONTENEDOR
  const quitaError = () => {
    guardarError(false);
  };

  

  return (
    <Contenedor onClick={quitaError}>
      {sesion ? (
        <Fragment>
          <HeaderSesion
            navegaSesion={navegaSesion}
            clase={clase}
            avanzaClase={avanzaClase}
            datosUsuario={datosUsuario}
          />
          {clase ?
          <DatosJugador
            datosUsuario={datosUsuario}
            error={error}
            guardarError={guardarError}
            tiros={tiros}
            guardarTiro={guardarTiro}
            
          />
          :  
          <Sesion
          datosUsuario={datosUsuario}
          error={error}
          guardarError={guardarError}
          clase={clase}
          avanzaClase={avanzaClase}
          />
          }
         
        </Fragment>
      ) : (
        <Fragment>
          <Header
            stateNuevoUsuario={stateNuevoUsuario}
            stateInicioSesion={stateInicioSesion}
            clickNuevoUsuario={clickNuevoUsuario}
            clickInicioSesion={clickInicioSesion}
          />
          <ContenedorIndex>
            <Fragment>
              <h1>SHOTAPP</h1>
            </Fragment>

            {clickNuevoUsuario ? (
              <Signup
                cargando={cargando}
                error={error}
                stateNuevoUsuario={stateNuevoUsuario}
                guardarCargando={guardarCargando}
                guardarError={guardarError}
                guardarExito={guardarExito}
                exito={exito}
              />
            ) : null}
            {clickInicioSesion ? (
              <Login
                guardarDatos={guardarDatos}
                error={error}
                guardarError={guardarError}
                navegaSesion={navegaSesion}
                guardarCargando={guardarCargando}
                cargando={cargando}
                avanzaClase={avanzaClase}
                guardarExito={guardarExito}
                exito={exito}
              />
            ) : null}
          </ContenedorIndex>
          )
        </Fragment>
      )}
        {cargando ? <Spinner /> : null}
       
    </Contenedor>
  );
}
export default App;
