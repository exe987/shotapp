import React, { useReducer } from "react";
import usuarioReducer from "./usuarioReducer";
import UsuarioContext from "./usuarioContext";
import clienteAxios from "../../config/axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import {
  CREAR_USUARIO,
  ERROR_ENTRADA_USUARIO,
  EXITO_ENTRADA_USUARIO,
  INICIAR_SESION,
  INICIO_SESION_EXITO,
  INICIO_SESION_ERROR,
  CERRAR_SESION,
  RECARGAR_PAGINA
} from "../../types/index";

const Usuarios = (props) => {
  const initialState = {
    usuarios: [],
    usuario: null,
    error: false,
    cargando: false,
    sesion: false,
    dataSesion: null,
  };
  const history = useHistory();
  const [state, dispatch] = useReducer(usuarioReducer, initialState);
  //FUNCION PARA CREAR USUARIO
  const creaUsuario = async (usuario) => {
    dispatch({
      type: CREAR_USUARIO,
      payload: usuario,
    });
    //VERIFICAR SI EL USUARIO EXISTE
    try {
      const { email } = usuario;
      const respuesta = await (await clienteAxios.get("./usuarios")).data.map(
        (user) => user.email
      );
      if (respuesta.includes(email)) {
        Swal.fire({
          icon: "error",
          text: "Usuario existente!!",
        });
      } else {
        await clienteAxios.post("./usuarios", usuario);
        dispatch({
          type: EXITO_ENTRADA_USUARIO,
        });
        Swal.fire({
          icon: "success",
          text: "Usuario creado correctamente!!",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        text: "No se pudo agregar el usuario, intentelo nuevamente!!",
      });
      dispatch({
        type: ERROR_ENTRADA_USUARIO,
      });
    }
  };
  //FUNCION PARA INICIAR SESION
  const iniciarSesion = async (usuario) => {
    dispatch({
      type: INICIAR_SESION,
    });
    try {
      //VERIFICAR SI EL USUARIO EXISTE
      const { email, password } = usuario;
      const respuesta = await (await clienteAxios.get("./usuarios")).data.find(
        (data) => data.email === email
      );
      if (!respuesta) {
        Swal.fire({
          icon: "error",
          text: "Usuario inexistente!!",
        });
      }
      if (respuesta.contraseña === password) {
        const { nombre, id } = respuesta;
        localStorage.setItem("nombre", nombre);
        localStorage.setItem("id", id);
        dispatch({
          type: INICIO_SESION_EXITO,
          payload: {
            nombre: nombre,
            id: id,
          },
        });
        history.push("/ingreso");
      } else {
        Swal.fire({
          icon: "error",
          text: "Contraseña incorrecta!!",
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: INICIO_SESION_ERROR,
      });
    }
  };
  //FUNCION PARA CERRAR SESION
  const cerrarSesion = (usuario) => {
    const { nombre } = usuario;
    Swal.fire({
      title: `${nombre} estás seguro de querer cerrar sesión?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cerrar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(`${nombre} se ha cerrado tu sesión`);
        dispatch({
          type: CERRAR_SESION,
        });
        localStorage.removeItem("nombre", nombre);
        history.push("/");
      }
    });
  };
  //FUNCION PARA NO PERDER SESION
  const recargarPagina = async () => {
    try {
      const data = {}
      data.nombre = await localStorage.getItem('nombre')
      data.id = await localStorage.getItem('id')
      console.log(data)
      dispatch({
        type: RECARGAR_PAGINA,
        payload: data
      });
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <UsuarioContext.Provider
      value={{
        error: state.error,
        cargando: state.cargando,
        sesion: state.sesion,
        dataSesion: state.dataSesion,
        creaUsuario,
        iniciarSesion,
        cerrarSesion,
        recargarPagina
      }}
    >
      {props.children}
    </UsuarioContext.Provider>
  );
};

export default Usuarios;
