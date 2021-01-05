import React, { useReducer } from 'react';
import usuarioReducer from './usuarioReducer';
import UsuarioContext from './usuarioContext';
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';
import {
	CREAR_USUARIO,
	ERROR_ENTRADA_USUARIO,
	EXITO_ENTRADA_USUARIO,
	INICIAR_SESION,
	INICIO_SESION_EXITO,
	INICIO_SESION_ERROR
} from '../../types/index';

const Usuarios = (props) => {
	const initialState = {
		usuarios: [],
		usuario: null,
		error: false,
		cargando: false
	};

	const [ state, dispatch ] = useReducer(usuarioReducer, initialState);

	//FUNCION PARA CREAR USUARIO
	const creaUsuario = async (usuario) => {
		dispatch({
			type: CREAR_USUARIO,
			payload: usuario
		});
		try {
			await clienteAxios.post('./usuarios', usuario);
			dispatch({
				type: EXITO_ENTRADA_USUARIO
			});
			Swal.fire({
				icon: 'success',
				text: 'Usuario creado correctamente!!'
			});
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: 'error',
				text: 'No se pudo agregar el usuario, intentelo nuevamente!!'
			});
			dispatch({
				type: ERROR_ENTRADA_USUARIO
			});
		}
	};
	//FUNCION PARA INICIAR SESION
	const iniciarSesion = async (usuario) => {
		dispatch({
			type: INICIAR_SESION
		});
		try {
			const {email, password} = usuario
			const respuesta = await clienteAxios.get('/usuarios')
			const found = respuesta.data.find(usuario  => usuario.email === email);
			console.log(found);
			dispatch({
				type: INICIO_SESION_EXITO
			});
			
		} catch (error) {}
	};

	return (
		<UsuarioContext.Provider
			value={{
				error: state.error,
				cargando: state.cargando,
				creaUsuario,
				iniciarSesion
			}}
		>
			{props.children}
		</UsuarioContext.Provider>
	);
};

export default Usuarios;
