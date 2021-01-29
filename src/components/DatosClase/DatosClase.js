import React, { useContext, Fragment, useEffect } from "react";
import JugadoresContext from "../../context/jugadores/jugadoresContext";
import UsuarioContext from "../../context/usuario/usuarioContext";

const DatosClase = () => {
  //DATOS CONTEXT
  const jugadoresDeContext = useContext(JugadoresContext);
  const { ronda,aciertoRonda, tirosPorUsuario, obtenerTirosPorUsuario } = jugadoresDeContext;
  const UsuariosdeContext = useContext(UsuarioContext);
  const { dataSesion } = UsuariosdeContext;

  //EXTRAER ELEMENTOS DE RONDA
  let ultimoTiro;
  let ultimoTirador;
  let ultimaDistancia;
  let porcentajeDistancia;
  let tirosClase;
  let aciertos;
  let errados;
  let porcentajeEfectividad;
  useEffect(() => {
    obtenerTirosPorUsuario(dataSesion.id);
  }, []);

  if (ronda.length >= 1) {
    ultimoTiro = ronda[ronda.length - 1].acierto;
    ultimoTirador = ronda[ronda.length - 1].nombre;
    ultimaDistancia = ronda[ronda.length - 1].distancia;
    porcentajeDistancia = ronda
      .map((tiros) => Number(tiros.distancia))
      .reduce((a, b) => a + b, 0);
    aciertos = ronda.filter((data) => data.acierto === 'true')
    porcentajeEfectividad = (aciertos.length * 100) / ronda.length;
    console.log(porcentajeEfectividad)
  }
  return (
    <Fragment>
      <nav className="navbar level has-background-light">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">PORCENTAJE EFECTIVIDAD CLASE</p>
            {ronda.length >= 1 ? (
              <p className="title">{porcentajeEfectividad.toFixed(2)}%</p>
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
        </div>0
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">PORCENTAJE DISTANCIA</p>
            {ronda.length >= 1 ? (
              <p className="title">
                {(porcentajeDistancia / ronda.length).toFixed(2)} m.
              </p>
            ) : (
              <p className="title">---</p>
            )}
          </div>
        </div>
      </nav>
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
            <p className="heading">ULTIMA DISTANCIA</p>
            {ronda.length >= 1 ? (
              <p className="title">{ultimaDistancia} m.</p>
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
