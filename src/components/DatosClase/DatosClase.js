import React, { useContext, Fragment, useEffect } from "react";
import JugadoresContext from "../../context/jugadores/jugadoresContext";
import UsuarioContext from "../../context/usuario/usuarioContext";

const DatosClase = () => {
  //DATOS CONTEXT
  const jugadoresDeContext = useContext(JugadoresContext);
  const {
    ronda,
    tirosPorUsuario,
    porcentajeDistanciaDeTiroHistorica,
    porcentajeAciertoHistorico,
    obtenerTirosPorUsuario,
  } = jugadoresDeContext;
  const UsuariosdeContext = useContext(UsuarioContext);
  const { dataSesion } = UsuariosdeContext;

  //EXTRAER ELEMENTOS DE RONDA
  let ultimoTiro;
  let ultimoTirador;
  let ultimaDistancia;
  let porcentajeDistancia;
  let aciertos;
  let porcentajeEfectividad;
  useEffect(() => {
    obtenerTirosPorUsuario(dataSesion.id);
    // eslint-disable-next-line
  }, [ronda]);

  if (ronda.length >= 1) {
    ultimoTiro = ronda[ronda.length - 1].acierto;
    ultimoTirador = ronda[ronda.length - 1].nombre;
    ultimaDistancia = ronda[ronda.length - 1].distancia;
    porcentajeDistancia = ronda
      .map((tiros) => Number(tiros.distancia))
      .reduce((a, b) => a + b, 0);
    aciertos = ronda.filter((data) => data.acierto === "true");
    porcentajeEfectividad = (aciertos.length * 100) / ronda.length;
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
              ultimoTiro === "true" ? (
                <p className="title is-6">
                  {ultimoTirador.toUpperCase()} encestó desde {ultimaDistancia}{" "}
                  m.
                </p>
              ) : (
                <p className="title is-6">
                  {ultimoTirador.toUpperCase()} erró desde {ultimaDistancia} m.
                </p>
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
              <p className="title">
                {(porcentajeDistancia / ronda.length).toFixed(2)} m.
              </p>
            ) : (
              <p className="title">---</p>
            )}
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">CANTIDAD DE TIROS CLASE</p>

            <p className="title">{ronda.length}</p>
          </div>
        </div>
      </nav>
      <nav className="navbar level has-background-light">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">EFECTIVIDAD HISTORICA</p>
            <p className="title">
              {(porcentajeAciertoHistorico / tirosPorUsuario.length).toFixed(2)}
              %
            </p>
          </div>
        </div>

        <div className="level-item has-text-centered">
          <div>
            <p className="heading">DISTANCIA HISTORICA</p>
            <p className="title">
              {(
                porcentajeDistanciaDeTiroHistorica / tirosPorUsuario.length
              ).toFixed(2)}{" "}
              m.
            </p>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
export default DatosClase;
