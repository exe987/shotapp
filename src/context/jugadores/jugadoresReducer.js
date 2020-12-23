import { AGREGAR_TIRO, AGREGAR_JUGADOR, MOSTRAR_SPINNER, ACTUALIZAR_NOMBRES } from '../../types/index';

const jugadoresReducer = (state, action) => {
	switch (action.type) {
		case AGREGAR_JUGADOR:
			return {
				...state,
				jugadores: [ ...state.jugadores, action.payload ]
			};
		case AGREGAR_TIRO:
			return {
				...state,
				ronda: [ ...state.ronda, action.payload ]
			};

		case MOSTRAR_SPINNER:
			return {
				...state,
				spinner: action.payload
			};
		case ACTUALIZAR_NOMBRES:
			return {
				...state,
				nombres: [ ...state.nombres, action.payload ]
			};

		default:
			return state;
	}
};

export default jugadoresReducer;
