import { AGREGAR_TIRO } from '../../types/index';

const jugadoresReducer = (state, action) => {
	switch (action.type) {
		
		case AGREGAR_TIRO:
			return{
				...state,
				ronda: [...state, action.payload]
			}


		default:
			return state;
	}
};

export default jugadoresReducer;
