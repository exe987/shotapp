import React, { useReducer } from 'react';
import jugadoresReducer from './jugadoresReducer';
import JugadoresContext from './jugadoresContext';

import clienteAxios from '../../config/axios';
import { AGREGAR_TIRO, AGREGAR_JUGADOR, MOSTRAR_SPINNER, ACTUALIZAR_NOMBRES } from '../../types/index';

const Jugadores = (props) => {
	const initialState = {
		jugadores: [],
		nombres: [],
		ronda: [],
		spinner: false
	};

	//REDUCER
	const [ state, dispatch ] = useReducer(jugadoresReducer, initialState);

	//AGREGAR JUGADORES
	const agregarJugador = async (jugador) => {
		dispatch({
			type: AGREGAR_JUGADOR,
			payload: jugador
		});
		await clienteAxios.post('./jugadores', jugador)
    };

	//TIROS
	const agregarTiro = async (tiro) => {
		dispatch({
			type: AGREGAR_TIRO,
			payload: tiro
		});
		await clienteAxios.post('./ronda', tiro)
	};

	//SPINNER
	const mostrarSpinner = (estado) => {
		dispatch({
			type: MOSTRAR_SPINNER,
			payload: estado
		});
	};

	return (
		<JugadoresContext.Provider
			value={{
				jugadores: state.jugadores,
				ronda: state.ronda,
				spinner: state.spinner,
				nombres: state.nombres,
				agregarJugador,
				agregarTiro,
				mostrarSpinner
			}}
		>
			{props.children}
		</JugadoresContext.Provider>
	);
};

export default Jugadores;
