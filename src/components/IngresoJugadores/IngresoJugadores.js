import React, { useState, useContext, useEffect } from "react";
import uuid from "uuid/dist/v4";
import Spinner from "../Spinner/Spinner";
import JugadoresContext from "../../context/jugadores/jugadoresContext";
import UsuarioContext from "../../context/usuario/usuarioContext";
import Swal from "sweetalert2";
const IngresoJugadores = () => {
  //DATOS CONTEXT
  const jugadoresDeContext = useContext(JugadoresContext);
  const {
    agregarJugador,
    mostrarSpinner,
    jugadoresUsuario,
    obtenerJugadores,
    spinner,
  } = jugadoresDeContext;

  const UsuariosdeContext = useContext(UsuarioContext);
  const { dataSesion } = UsuariosdeContext;

  useEffect(() => {
    obtenerJugadores(dataSesion.id);
    // eslint-disable-next-line
  }, [dataSesion]);

  //ESTADOS LOCALES
  const [jugador, ingresoJugador] = useState({
    nombre: "",
    id: null,
  });
  const [form, mostrarForm] = useState(false);
  //FUNCION PARA ABRIR Y CERRAR FORMULARIO
  const openForm = () => {
    if (form) {
      mostrarForm(false);
    } else {
      mostrarForm(true);
    }
  };
  //FUNCION QUE COLOCA LOS ELEMENTOS EN EL STATE
  const handleChange = (e) => {
    //ACTUALIZA EL STATE
    ingresoJugador({
      ...jugador,
      [e.target.name]: e.target.value,
    });
  };
  const { nombre } = jugador;
  //SUBMIT DATOS
  const handleSubmit = (e) => {
    e.preventDefault();
    mostrarSpinner(true);
    if (nombre.trim() === "") {
      mostrarSpinner(false);
      Swal.fire({
        icon: "error",
        text: "Debe elegir el nombre del jugador!!",
      });
      ingresoJugador({
        nombre: "",
        id: null,
      });
    } else {
      jugador.id = uuid();
      jugador.usuario = dataSesion.id;
      agregarJugador(jugador);
      mostrarSpinner(false);
      ingresoJugador({
        nombre: "",
        id: null,
      });
    }
  };
  return (
    <div>
      {spinner ? <Spinner /> : null}
      {!form ? (
        <section className="hero shade is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <svg viewBox="0 0 960 300">
                <symbol id="s-text">
                  <text textAnchor="middle" x="50%" y="80%">
                    SHOTAPP
                  </text>
                </symbol>
                <g className="g-ants">
                  <use xlinkHref="#s-text" className="text-copy" />
                  <use xlinkHref="#s-text" className="text-copy" />
                  <use xlinkHref="#s-text" className="text-copy" />
                  <use xlinkHref="#s-text" className="text-copy" />
                  <use xlinkHref="#s-text" className="text-copy" />
                </g>
              </svg>
              <p className="subtitle">
                <button
                  type="button"
                  className="button is-danger mt-3"
                  onClick={openForm}
                >
                  INGRESA JUGADORES
                </button>
              </p>
              <p className="title is-1 has-text-black mt-5 has-background-warning">
                USTED YA TIENE {jugadoresUsuario.length} JUGADORES
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="hero shade is-medium">
          <div className="hero-body">
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <p className="has-text-warning title is-3">JUGADORES</p>
                  <p className="title has-text-warning is-1">
                    {jugadoresUsuario.length}
                  </p>
                </div>
              </div>
            </nav>
            <div className="columns is-centered">
              <form className="column is-5 is-half" onSubmit={handleSubmit}>
                <div className="field">
                  <div className="control">
                    <input
                      autoFocus
                      className="input is-small is-danger"
                      type="text"
                      placeholder={`INGRESE JUGADOR ${
                        jugadoresUsuario.length + 1
                      }`}
                      name="nombre"
                      value={nombre}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="level ">
                  <div className="level-item has-text-centered">
                    {" "}
                    <button type="submit" className="button is-danger mt-3">
                      INGRESA TU JUGADOR
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
export default IngresoJugadores;
