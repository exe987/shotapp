import React, { useReducer, useEffect } from 'react';
import jugadoresReducer from './jugadoresReducer';
import JugadoresContext from './jugadoresContext';
import { AGREGAR_TIRO, AGREGAR_JUGADOR, MOSTRAR_SPINNER, ACTUALIZAR_NOMBRES } from '../../types/index';

const Jugadores = (props) => {
	const initialState = {
		jugadores: [ { nombre: 'Andre', id: 1 }, { nombre: 'Exe', id: 2 }, { nombre: 'bu', id: 3 } ],
		nombres: [],
		ronda: [
			{
				acierto: { acierto: true, id: '1' },
				distancia: { distancia: '5', id: '1' },
				nombre: { nombre: 'Andre', id: '1' }
			}
		],
		spinner: false
	};

	//REDUCER
	const [ state, dispatch ] = useReducer(jugadoresReducer, initialState);

	//AGREGAR JUGADORES
	const agregarJugador = (jugador) => {
		dispatch({
			type: AGREGAR_JUGADOR,
			payload: jugador
		});
		dispatch({
			type: ACTUALIZAR_NOMBRES,
			payload: jugador.nombre
		});
	};

	//TIROS
	const agregarTiro = (tiro) => {
		dispatch({
			type: AGREGAR_TIRO,
			payload: tiro
		});
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
