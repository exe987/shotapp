import {
  CREAR_USUARIO,
  ERROR_ENTRADA_USUARIO,
  EXITO_ENTRADA_USUARIO,
  INICIAR_SESION,
  INICIO_SESION_EXITO,
  INICIO_SESION_ERROR,
  CERRAR_SESION
} from "../../types/index";

const usuarioReducer = (state, action) => {
  switch (action.type) {
    case CREAR_USUARIO: {
      return {
        ...state,
        usuarios: [...state.usuarios, action.payload],
        error: false,
        cargando: true,
      };
    }
    case EXITO_ENTRADA_USUARIO: {
      return {
        ...state,
        error: false,
        cargando: false,
      };
    }
    case ERROR_ENTRADA_USUARIO: {
      return {
        ...state,
        error: true,
        cargando: false,
      };
    }
    case INICIAR_SESION: {
      return {
        ...state,
        cargando: true,
      };
    }
    case INICIO_SESION_EXITO: {
      return {
        ...state,
        cargando: false,
        sesion: true,
        dataSesion: action.payload,
      };
    }
    case INICIO_SESION_ERROR: {
      return {
        ...state,
        cargando: false,
        sesion: false,
      };
	}
	case CERRAR_SESION: {
		return {
			...state,
			cargando: false,
			sesion: false,
			dataSesion: null
		}
	}
    default:
      return state;
  }
};

export default usuarioReducer;
