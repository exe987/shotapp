import React, { useContext, Fragment } from "react";
import JugadoresContext from "../../context/jugadores/jugadoresContext";

const DatosClase = () => {
  //DATOS CONTEXT
  const jugadoresDeContext = useContext(JugadoresContext);
  const { jugadores, agregarTiro, ronda } = jugadoresDeContext;

  //EXTRAER ELEMENTOS DE RONDA
  let ultimoTiro;
  let ultimoTirador;
  let porcentajeDistancia;
  if (ronda.length >= 1) {
    ultimoTiro = ronda[ronda.length - 1].acierto;
    ultimoTirador = ronda[ronda.length - 1].nombre;
    porcentajeDistancia = ronda
      .map((tiros) => Number(tiros.distancia))
      .reduce((a, b) => a + b, 0);
  }

  return (
    <Fragment>
      <nav className="navbar level has-background-light">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">ULTIMO TIRADOR</p>
            {ronda.length >= 1 ? (
              <p className="title">{ultimoTirador}</p>
            ) : (
              <p className="title">---</p>
            )}
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">ULTIMO TIRO</p>
            {ronda.length >= 1 ? (
              ultimoTiro ? (
                <p className="title">Encestó</p>
              ) : (
                <p className="title">Erró</p>
              )
            ) : (
              <p className="title">---</p>
            )}
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">PORCENTAJE DISTANCIA</p>
            {ronda.length >= 1 ? (
              <p className="title">{porcentajeDistancia / ronda.length} m.</p>
            ) : (
              <p className="title">---</p>
            )}
          </div>
        </div>
      </nav>

    
    </Fragment>
  );
};

export default DatosClase;
