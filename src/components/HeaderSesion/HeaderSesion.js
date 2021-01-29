import React, { useState, useContext } from "react";
import UsuarioContext from "../../context/usuario/usuarioContext";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const HeaderSesion = () => {
  const UsuariosdeContext = useContext(UsuarioContext);
  const { dataSesion, sesion, cerrarSesion } = UsuariosdeContext;
  //ESTADOS DE MODAL
  const [modal, mostrarModal] = useState(false);
  const [modalb, mostrarModalb] = useState(false);
  const toggle = () => {
    if (modal) {
      mostrarModal(false);
    } else {
      mostrarModal(true);
    }
  };
  const toggleb = () => {
    if (modalb) {
      mostrarModalb(false);
    } else {
      mostrarModalb(true);
    }
  };
  //ESTADOS LOCALES
  const [isActive, setisActive] = useState(false);
  //CERRAR SESION
  const cierreDeSesion = (data) => {
    cerrarSesion(data);
  };
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      {modal ? <Login toggle={toggle} modal={modal} /> : null}
      {modalb ? <Signup toggleb={toggleb} modalb={modalb} /> : null}

      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <span className="title is-2 has-text-white">
            SHOTAPP <i className="fas fa-basketball-ball" />
          </span>
        </a>
        <a
          href="/#"
          onClick={() => {
            setisActive(!isActive);
          }}
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        {sesion ? (
          <div className="navbar-end">
            <Link className="navbar-item" to="/ingreso">
              INGRESA JUGADORES
            </Link>
            <Link className="navbar-item" to="/dashboard">
              IR A CLASE!!!
            </Link>
            <a href="/#" className="navbar-item">
              HOLA {dataSesion.nombre.toUpperCase()}!!!
            </a>
            <a
              href="/#"
              className="navbar-item"
              onClick={() => cierreDeSesion(dataSesion)}
            >
              <span>
                CERRAR SESION <i className="fas fa-user-plus" />
              </span>
            </a>
          </div>
        ) : (
          <div className="navbar-end">
            <a href="/#" className="navbar-item" onClick={toggleb}>
              <span>
                CREA USUARIO <i className="fas fa-user-plus" />
              </span>
            </a>
            <a href="/#" className="navbar-item" onClick={toggle}>
              <span>
                INICIAR SESION <i className="fas fa-sign-in-alt" />
              </span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
export default HeaderSesion;
