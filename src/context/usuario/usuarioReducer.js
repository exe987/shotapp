import { CREAR_USUARIO, MOSTRAR_ERROR } from '../../types/index';

const usuarioReducer = (state, action) => {
	switch (action.type) {
		case CREAR_USUARIO: {
			return {
				...state,
				usuarios: [...state.usuarios, action.payload ]
			};
		}
		case MOSTRAR_ERROR: {
			return {
				...state,
				error: true
			};
		}

		default:
			return state;
	}
};

export default usuarioReducer;
