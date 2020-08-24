import React, { useState } from "react";
import DatosClase from "../DatosClase/DatosClase";
import Error from "../Error/Error";
import styled from "styled-components";
import PropTypes from "prop-types";

const DivDesempeño = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
 
  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
   
  }
`;

const FormDesempeño = styled.form`
  width: 100%;
  display: grid;
  grid-template-rows: 15vh 10vh 40vh 15vh;
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.75);
  border: 2px solid red;
  box-sizing: border-box;
  select {
    height: 100%;
    font-size: 25px;
    border: none;
  }
  box-sizing: border-box;
 
  h2 {
    text-align: center;
    font-size: 25px;
    color: black;
    width: 100%;
    height: 100%;
    background-color: black;
    box-sizing: border-box;
    display: grid;
    align-items: center;
    color: white;
  }

  @media (max-width: 990px) {
    border: 2px solid white;
   
  }
`;

const Centrar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  @media (max-width: 990px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
  box-sizing: border-box;
`;

const ImageSelect = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
`;
const CanchaIzquierda = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2 1fr);
  align-items: center;
  justify-items: center;
  input {
    background-color: black;
    width: 100%;
    height: 100%;
    font-size: 18px;
    border: 1px solid white;
    color: white;
    &:hover {
      cursor: pointer;
      background-color: white;
      color: black;
    }
    &:focus {
    background-color: white;
    color: black;
  }
  }
`;
const CanchaDerecha = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3 1fr);
  align-items: center;
  justify-items: center;

  input {
    width: 100%;
    border: 1px solid white;
    height: 100%;
    font-size: 18px;
    color: white;
    background-color: black;
    &:hover {
      cursor: pointer;
      background-color: white;
      color: black;
    }
    &:focus {
    background-color: white;
    color: black;
  }
  }
`;

const Performance = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 40% 60%;
  align-items: center;
`;

const DistanciaMetros = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  input {
    font-size: 20px;
    border: 1px solid black;
    height: 100%;
    @media (max-width: 990px) {
      font-size: 25px;
    }
    &:focus{
      border: none;
    }
  }
`;

const Acierto = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  height: 101%;
  box-sizing: content-box;
  margin: 0 auto;
`;

const ButtonEncesto = styled.input`
  width: 100%;
  background-color: black;
  color: green;
  font-size: 30px;
  font-weight: 700;
  border: 1px solid white;
  padding: 1px;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
  }
  &:visited {
    background-color: white;
    color: black;
  }
  box-sizing: content-box;
`;

const ButtonErro = styled.input`
  width: 100%;
  background-color: black;
  color: red;
  font-size: 30px;
  font-weight: 700;
  border: 1px solid white;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
  }
  &:visited {
    background-color: white;
    color: black;
  }
  box-sizing: content-box;
`;

const ButtonForm = styled.button`
  width: 80%;
  height: 75%;
  font-size: 18.5px;
  font-weight: 700;
  margin: 0 auto;
  background-color: rgb(223, 9, 2);
  border: 2px solid black;
  box-sizing: border-box;
  margin-top: 2.5vh;

  &:hover {
    cursor: pointer;
    background-color: black;
    color: rgb(223, 9, 2);
    border: 2px solid rgb(223, 9, 2);
  }
`;

//COMPONENTE
const DatosJugador = ({
  datosUsuario,
  error,
  guardarError,
  guardarTiro,
  tiros
}) => {
  //STATE DE TIRO INDIVIDUAL
  const [tiro, datosTiro] = useState({});

  //EXTRAEMOS LOS JUGADORES QUE INGRESA EL USUARIO
  const {
    jugador1,
    jugador2,
    jugador3,
    jugador4,
    jugador5,
    jugador6,
    jugador7,
    jugador8,
    jugador9,
    jugador10,
    jugador11,
    jugador12,
  } = datosUsuario;

  //CAPTURAR DATOS DEL TIRO DEL ALUMNO
  const handleChange = (e) => {
    datosTiro({
      ...tiro,
      [e.target.name]: e.target.value,
    });
  };


   //EXTRAEMOS CLAVES DEL TIRO PARA VALIDACION
  const { jugador, sector, metros, resultado } = tiro;

  //SUBMIT DE DATOS
  const agregarTiro = (e) => {
    //PARA QUE NO SE RECARGUE LA PAGINA
    e.preventDefault();
    //VALIDACION
    if (
      jugador === undefined ||
      sector === undefined ||
      metros === undefined ||
      resultado === undefined
    ) {
      //EN CASO DE QUE NO HAYA COMPLETADO LOS DATOS DEL TIRO
      guardarError(true);
      return;
    } else {
      //GUARDAR TIRO
      guardarTiro([...tiros, tiro]);
      //REINICIAMOS FORMULARIO
    }
  };

  return (
    <DivDesempeño>
      <FormDesempeño onSubmit={agregarTiro}>
        {error ? (
          <Error mensaje="INGRESA CORRECTAMENTE LOS DATOS DE TIRO" />
        ) : (
          <h2>SELECCIONE LOS DATOS DEL TIRO</h2>
        )}

        <select name="jugador" onChange={handleChange}>
          <option>----------SELECCIONE TIRADOR----------</option>
          <option value={jugador1}>{jugador1}</option>
          <option value={jugador2}>{jugador2}</option>
          <option value={jugador3}>{jugador3}</option>
          <option value={jugador4}>{jugador4}</option>
          <option value={jugador5}>{jugador5}</option>
          <option value={jugador6}>{jugador6}</option>
          <option value={jugador7}>{jugador7}</option>
          <option value={jugador8}>{jugador8}</option>
          <option value={jugador9}>{jugador9}</option>
          <option value={jugador10}>{jugador10}</option>
          <option value={jugador11}>{jugador11}</option>
          <option value={jugador12}>{jugador12}</option>
        </select>
        <Centrar>
          <ImageSelect>
            <CanchaIzquierda>
              <input
                name="sector"
                type="button"
                value="LADO IZQUIERDO"
                onClick={handleChange }
              />
              <input
                name="sector"
                type="button"
                value="LADO DERECHO"
                onClick={handleChange}
              />
            </CanchaIzquierda>
            <CanchaDerecha>
              <input
                name="sector"
                type="button"
                value="PUNTA IZQUIERDA"
                onClick={handleChange}
              />
              <input
                name="sector"
                type="button"
                value="PUNTA DERECHA"
                onClick={handleChange}
              />
              <input
                name="sector"
                type="button"
                value="FRENTE AL ARO"
                onClick={handleChange}
              />
            </CanchaDerecha>
          </ImageSelect>
          <Performance>
            <DistanciaMetros>
              <input
                name="metros"
                type="number"
                placeholder=" DISTANCIA DE TIRO EN METROS"
                onChange={handleChange}
              />
            </DistanciaMetros>
            <Acierto>
              <ButtonEncesto
                name="resultado"
                type="button"
                value="ENCESTO"
                onClick={handleChange}
              />
              <ButtonErro
                name="resultado"
                type="button"
                value="ERRO"
                onClick={handleChange}
              />
            </Acierto>
          </Performance>
        </Centrar>
        <ButtonForm type="submit">GUARDAR TIRO</ButtonForm>
      </FormDesempeño>

      <DatosClase 
      tiros={tiros} 
      />
    </DivDesempeño>
  );
};



DatosJugador.propTypes = {
  datosUsuario: PropTypes.object.isRequired,
  error: PropTypes.bool.isRequired,
  guardarError: PropTypes.func.isRequired,
  guardarTiro: PropTypes.func.isRequired,
  tiros: PropTypes.array.isRequired
};

export default DatosJugador;
