import React, { useReducer } from "react";
import jugadoresReducer from "./jugadoresReducer";
import JugadoresContext from "./jugadoresContext";
import Swal from "sweetalert2";

import clienteAxios from "../../config/axios";
import {
  AGREGAR_TIRO,
  AGREGAR_JUGADOR,
  SELECCIONAR_JUGADOR,
  CANCELAR_SELECCIONAR_JUGADOR,
  OBTENER_JUGADORES,
  ELIMINAR_JUGADOR,
  OBTENER_TIROS_USUARIO,
  MOSTRAR_SPINNER,
} from "../../types/index";

const Jugadores = (props) => {
  const initialState = {
    jugadores: [],
    jugadorSeleccionado: false,
    jugadoresUsuario: [],
    nombres: [],
    ronda: [],
    aciertoRonda: [],
    tirosPorUsuario: [],
    spinner: false,
  };
  //REDUCER
  const [state, dispatch] = useReducer(jugadoresReducer, initialState);
  //SELECCIONAR JUGADOR
  const seleccionarJugador = (jugador) => {
    dispatch({
      type: SELECCIONAR_JUGADOR,
      payload: jugador,
    });
  };
  //CANCELAR SELECCION JUGADOR
  const cancelarSeleccionarJugador = () => {
    dispatch({
      type: CANCELAR_SELECCIONAR_JUGADOR,
      payload: false,
    });
  };
  //AGREGAR JUGADORES
  const agregarJugador = async (jugador) => {
    try {
      dispatch({
        type: AGREGAR_JUGADOR,
        payload: jugador,
      });
      await clienteAxios.post("./jugadores", jugador);
      Swal.fire({
        icon: "success",
        text: "Jugador creado!!",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        text: "No se pudo agregar el jugador!!",
      });
    }
  };
  //OBTENER JUGADORES POR USUARIO Y MOSTRARLOS EN PANTALLA
  const obtenerJugadores = async (id) => {
    try {
      const respuesta = await clienteAxios.get(`./jugadores?usuario=${id}`);
      dispatch({
        type: OBTENER_JUGADORES,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //BORRAR JUGADOR
  const eliminarJugador = async (id, usuario) => {
    try {
      Swal.fire({
        title: `Estás seguro de querer borrar este jugador?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Borrar",
      }).then((result) => {
        if (result.isConfirmed) {
          clienteAxios.delete(`/jugadores/${id}`, {
            params: { usuario },
          });
          dispatch({
            type: ELIMINAR_JUGADOR,
            payload: id,
          });
          Swal.fire(`El jugador se ha borrado`);
        }
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        text: "No se pudo agregar el tiro!!",
      });
    }
  };
  //TIROS
  const agregarTiro = async (tiro) => {
    try {
      dispatch({
        type: AGREGAR_TIRO,
        payload: tiro,
      });
      await clienteAxios.post("./tiros", tiro);
    } catch (error) {
      console.log(error);
    }
  };
  //OBTENER TIROS POR USUARIO
  const obtenerTirosPorUsuario = async id => {
    const respuesta = await clienteAxios.get(`./tiros?usuario=${id}`);
    try {
      dispatch({
        type: OBTENER_TIROS_USUARIO,
        payload: respuesta.data,
      });
     
    } catch (error) {
      console.log(error);
    }
  }
  //SPINNER
  const mostrarSpinner = (estado) => {
    dispatch({
      type: MOSTRAR_SPINNER,
      payload: estado,
    });
  };
  return (
    <JugadoresContext.Provider
      value={{
        jugadores: state.jugadores,
        ronda: state.ronda,
        spinner: state.spinner,
        nombres: state.nombres,
        jugadorSeleccionado: state.jugadorSeleccionado,
        jugadoresUsuario: state.jugadoresUsuario,
        tirosPorUsuario: state.tirosPorUsuario,
        aciertoRonda: state.aciertoRonda,
        agregarJugador,
        seleccionarJugador,
        cancelarSeleccionarJugador,
        agregarTiro,
        mostrarSpinner,
        obtenerJugadores,
        eliminarJugador,
        obtenerTirosPorUsuario
      }}
    >
      {props.children}
    </JugadoresContext.Provider>
  );
};

export default Jugadores;
