import React, { useState, useContext, Fragment } from "react";
import JugadoresContext from "../../context/jugadores/jugadoresContext";
import UsuarioContext from "../../context/usuario/usuarioContext";
import Swal from "sweetalert2";
const DatosJugador = () => {
  //DATOS CONTEXT
  const jugadoresDeContext = useContext(JugadoresContext);
  const {
    agregarTiro,
    jugadorSeleccionado,
    seleccionarJugador,
    cancelarSeleccionarJugador,
    eliminarJugador,
    jugadoresUsuario,
  } = jugadoresDeContext;
  const UsuariosdeContext = useContext(UsuarioContext);
  const { dataSesion } = UsuariosdeContext;
  //STATE TIRO JUGADOR
  const [desempeño, desempeñoJugador] = useState({
    acierto: false,
    distancia: null,
  });
  //FUNCION QUE COLOCA LOS ELEMENTOS EN EL STATE
  const handleClick = (e) => {
    //ACTUALIZA EL STATE
    desempeñoJugador({
      ...desempeño,
      [e.target.name]: e.target.value,
    });
  };
  //EXTRAER ELEMENTOS DEL ESTADO LOCAL
  let { acierto, distancia } = desempeño;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (acierto === null || distancia === null) {
      Swal.fire({
        icon: "error",
        text: "Complete correctamente los datos de tiro!!",
      });
      return null;
    } else {
      desempeño.distancia = Number(distancia);
      desempeño.nombre = jugadorSeleccionado[0].nombre;
      desempeño.usuario = dataSesion.id;
      agregarTiro(desempeño);
      desempeñoJugador({
        acierto: false,
        distancia: null,
      });
      cancelarSeleccionarJugador();
    }
  };
  return (
    <Fragment>
      <div className="columns is-desktop is-multiline is-centered">
        {!jugadorSeleccionado ? (
          jugadoresUsuario.map((jugador) => (
            <div
              key={jugador.id}
              className="column card m-2 is-3-desktop has-background-dark"
            >
              <div className="card-header-title title is-6 has-text-white">
                {jugador.nombre.toUpperCase()}
              </div>
              <div className="card-header-icon">
                <button
                  type="button"
                  name="nombre"
                  value={jugador.nombre}
                  onClick={() => seleccionarJugador(jugador)}
                  className="button is-link is-small m-2"
                >
                  SELECCIONAR
                </button>
                <button
                  type="button"
                  onClick={() => eliminarJugador(jugador.id, dataSesion.id)}
                  className="button is-danger is-small m-2"
                >
                  ELIMINAR
                </button>
              </div>
            </div>
          ))
        ) : (
          <form
            className={`card column is-4 has-background-dark`}
            onSubmit={handleSubmit}
          >
            <div className="card-header-title title is-6 has-text-white">
              {jugadorSeleccionado[0].nombre.toUpperCase()}
            </div>
            <div className="card-header-icon">
              <button
                type="button"
                name="nombre"
                onClick={cancelarSeleccionarJugador}
                className="button is-link is-small is-fullwidth is-outlined"
              >
                CANCELAR SELECCION
              </button>
            </div>
            <div className="card-header-icon">
              <button
                type="button"
                name="acierto"
                value={true}
                onClick={handleClick}
                className="button is-success is-small is-fullwidth is-outlined"
              >
                ENCESTO
              </button>
            </div>
            <div className="card-header-icon">
              <button
                type="button"
                name="acierto"
                value={false}
                onClick={handleClick}
                className="button is-danger is-small is-fullwidth is-outlined"
              >
                NO ENCESTO
              </button>
            </div>
            <div className="cancha card-image">
              <img
                alt={jugadorSeleccionado[0].nombre}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Basketball_Halfcourt_Transparant.svg/250px-Basketball_Halfcourt_Transparant.svg.png"
              />
              <div className="sector">
                <div className="alto">
                  <button
                    type="button"
                    className="foco"
                    name="distancia"
                    value={5}
                    onClick={handleClick}
                  />
                  <button
                    type="button"
                    className="foco"
                    name="distancia"
                    value={2}
                    onClick={handleClick}
                  />
                  <button
                    type="button"
                    className="foco"
                    name="distancia"
                    value={5}
                    onClick={handleClick}
                  />
                </div>
                <div className="bajo">
                  <button
                    type="button"
                    className="foco"
                    name="distancia"
                    value={8}
                    onClick={handleClick}
                  />
                  <button
                    type="button"
                    className="foco"
                    name="distancia"
                    value={8}
                    onClick={handleClick}
                  />
                </div>
              </div>
            </div>
            <div className="card-header-icon">
              <button
                className="button is-small is-outlined is-fullwidth is-white"
                type="submit"
              >
                AGREGAR TIRO
              </button>
            </div>
          </form>
        )}
      </div>
    </Fragment>
  );
};
export default DatosJugador;
