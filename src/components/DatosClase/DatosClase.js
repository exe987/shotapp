import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//STYLED COMPONENTS

const ContenedorResultados = styled.div`
  width: 100%;
  height: 80vh;
  background-color: rgb(0, 0, 0, 0.7);
  display: grid;
  grid-template-rows: 10vh 25vh 10vh 10vh 25vh;
  color: white;
  align-items: center;
  border: 2px solid red;
  h2 {
    width: 100%;
    height: 100%;
    font-size: 30px;
    background-color: black;
    display: grid;
    align-items: center;
    text-align: center;
  }
`;

const MostrarDatos = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  box-sizing: border-box;
  display: grid;
  background-color: white;
  @media (max-width: 990px) {
    border: 1px solid black;
  }
  h3 {
    margin-top: 5px;
    margin-left: 5px;
    font-size: 20px;
    color: black;
    width: 75%;
  }
  p {
    font-size: 30px;
    text-align: center;
    color: black;
  }
`;
const UltimosResultados = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
`;

const PromedioMetros = styled.div`
  h3 {
    width: 100%;
    height: 100%;
    font-size: 25px;
    background-color: black;
    display: grid;
    align-items: center;
  }
`;
const DatosClase = ({ tiros }) => {
  //STATE DE ULTIMO RESULTADO
  const [ultimoTiro, actualizarUltimo] = useState("---");
  //STATE DE ULTIMOS RESULTADOS
  const [ultimosResultados, actualizarUltimosResultados] = useState(["---"]);
  //STATE DE ULTIMO TIRADOR
  const [ultimoTirador, actualizarUltimoTirador] = useState("---");
  //STATE DE ULTIMOS 3 TIRADORES
  const [ultimosTiradores, actualizarUltimoTiradores] = useState([]);
  //STATE DE METROS
  const [ultimaDistancia, actualizarDistancia] = useState(0);
  //STATE DE PROMEDIO DE DISTANCIA DE TIRO
  const [promedioMetro, actualizarPromedioMetros] = useState(0);
  useEffect(() => {
    //ULTIMO TIRO
    let arrayTiros = tiros.map((data) => data.resultado);
    actualizarUltimo(arrayTiros[arrayTiros.length - 1]);
    //ULTIMO TIRADOR
    let arrayTiradores = tiros.map((data) => data.jugador);
    actualizarUltimoTirador(arrayTiradores[arrayTiradores.length - 1]);
    //ULTIMA DISTANCIA
    let arrayMetros = tiros.map((data) => Number(data.metros));
    actualizarDistancia(arrayMetros[arrayMetros.length - 1]);
    //PROMEDIO DE DISTANCIA DE TIROS
    if (arrayMetros.length > 0) {
      let promedio = arrayMetros.reduce((a, b) => a + b, 0);
      actualizarPromedioMetros(promedio / arrayMetros.length);
    }

    //OBTENER LOS ULTIMOS MOVIMIENTOS
    if (arrayTiros.length && arrayTiradores.length > 2) {
      //ULTIMOS 3 TIROS
      actualizarUltimosResultados(arrayTiros.slice(arrayTiros.length - 3));
      //ULTIMOS 3 TIRADORES
      actualizarUltimoTiradores(
        arrayTiradores.slice(arrayTiradores.length - 3)
      );
    }
  }, [tiros]);

  return (
    <ContenedorResultados>
      <h2>DESEMPEÑO TIRADOR</h2>
      <MostrarDatos>
        <h3>ULTIMO TIRO</h3>
        <p>
          {" "}
          {ultimoTirador} {ultimoTiro} DESDE {ultimaDistancia} METROS
        </p>
      </MostrarDatos>

      <h2>ULTIMOS RESULTADOS</h2>
      <PromedioMetros>
        <h3>PROMEDIO DE DISTANCIA DE TIROS: {promedioMetro.toFixed(2)} m.</h3>
      </PromedioMetros>

      <UltimosResultados>
        <MostrarDatos>
          <h3>ULTIMO TIRADOR</h3>
          <p>
            {ultimosTiradores[2]} {ultimosResultados[2]}
            {""}
          </p>
        </MostrarDatos>
        <MostrarDatos>
          <h3>ANTEULTIMO TIRADOR</h3>
          <p>
            {ultimosTiradores[1]} {ultimosResultados[1]}
            {""}
          </p>
        </MostrarDatos>
        <MostrarDatos>
          <h3>ANTEPENULTIMO TIRADOR</h3>
          <p>
            {ultimosTiradores[0]} {ultimosResultados[0]}
            {""}
          </p>
        </MostrarDatos>
      </UltimosResultados>
    </ContenedorResultados>
  );
};

DatosClase.propTypes = {
  tiros: PropTypes.array.isRequired
};

export default DatosClase;
