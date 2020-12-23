import React, { useReducer, useEffect } from 'react';
import usuarioReducer from './usuarioReducer';
import UsuarioContext from './usuarioContext';
import { CREAR_USUARIO, MOSTRAR_ERROR } from '../../types/index';

const Usuarios = (props) => {
	const initialState = {
		usuarios: [],
		usuario: null,
		error: false,
		spinner: false
	};

	const [ state, dispatch ] = useReducer(usuarioReducer, initialState);

	//FUNCION PARA CREAR USUARIO
	const creaUsuario = (usuario) => {
		dispatch({
			type: CREAR_USUARIO,
			payload: usuario
		});
	};

	//FUNCION PARA MOSTRAR ERROR
	const mostrarError = (error) => {
		dispatch({
			type: MOSTRAR_ERROR,
			payload: error
		});
	};

	return (
		<UsuarioContext.Provider
			value={{
				error: state.error,
				spinner: state.spinner,
				creaUsuario,
				mostrarError
			}}
		>
			{props.children}
		</UsuarioContext.Provider>
	);
};

export default Usuarios;
