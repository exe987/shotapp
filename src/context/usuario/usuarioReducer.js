import { CREAR_USUARIO,  ERROR_ENTRADA_USUARIO, EXITO_ENTRADA_USUARIO    } from '../../types/index';

const usuarioReducer = (state, action) => {
	switch (action.type) {
		case CREAR_USUARIO: {
			return {
				...state,
				usuarios: [...state.usuarios, action.payload ],
				error: false,
				cargando: true
			};
		}
		case EXITO_ENTRADA_USUARIO: {
			return {
				...state,
				error: false,
				cargando: false
			}
		}
		case ERROR_ENTRADA_USUARIO: {
			return {
				...state,
				error: true,
				cargando: false
			};
		}

		default:
			return state;
	}
};

export default usuarioReducer;
