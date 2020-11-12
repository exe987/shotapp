import React, { useReducer, useEffect } from 'react';
import jugadoresReducer from './jugadoresReducer';
import JugadoresContext from './jugadoresContext';
import {AGREGAR_TIRO} from '../../types/index';

const Jugadores = (props) => {
	const initialState = {
		jugadores: [
			{
				nombre: 'Perro aaa',
				id: 1
            },
            {
				nombre: 'Perro ',
				id: 2
			},
			{
				nombre: 'Perro ',
				id: 3
			},
			{
				nombre: 'Perro ',
				id: 4
			},
			{
				nombre: 'Perro aaa',
				id: 5
            },
            {
				nombre: 'Perrol',
				id: 6
			},
			{
				nombre: 'Perro',
				id: 7
			},
			{
				nombre: 'Perro ',
				id: 8
			},
		],
		ronda: [],
		tiro: {}
	};

	const [ state, dispatch ] = useReducer(jugadoresReducer, initialState);


	//TIROS
	const agregarTiro = tiro =>{
		dispatch({
			type: AGREGAR_TIRO,
			payload: tiro
		})
	}




	return (
		<JugadoresContext.Provider
			value={{
				jugadores: state.jugadores,
				ronda: state.ronda,
				tiro: state.tiro,
				agregarTiro,
			}}
		>
			{props.children}
		</JugadoresContext.Provider>
	);
};

export default Jugadores;
