import {
  AGREGAR_TIRO,
  AGREGAR_JUGADOR,
  SELECCIONAR_JUGADOR,
  MOSTRAR_SPINNER,
  OBTENER_JUGADORES,
  CANCELAR_SELECCIONAR_JUGADOR,
  ELIMINAR_JUGADOR,
  OBTENER_TIROS_USUARIO,
} from "../../types/index";
const jugadoresReducer = (state, action) => {
  switch (action.type) {
    case AGREGAR_JUGADOR:
      return {
        ...state,
        jugadores: [...state.jugadores, action.payload],
      };

    case MOSTRAR_SPINNER:
      return {
        ...state,
        spinner: action.payload,
      };
    case SELECCIONAR_JUGADOR:
      return {
        ...state,
        jugadorSeleccionado: state.jugadoresUsuario.filter(
          (jugadores) => jugadores.id === action.payload.id
        ),
      };
    case CANCELAR_SELECCIONAR_JUGADOR:
      return {
        ...state,
        jugadorSeleccionado: action.payload,
      };
    case OBTENER_JUGADORES:
      return {
        ...state,
        jugadoresUsuario: action.payload,
      };
    case ELIMINAR_JUGADOR:
      return {
        ...state,
        jugadoresUsuario: state.jugadoresUsuario.filter(
          (jugador) => jugador.id !== action.payload
        ),
      };
    case AGREGAR_TIRO:
      return {
        ...state,
        ronda: [...state.ronda, action.payload],
        aciertoRonda: state.ronda.filter((data) => data.acierto === 'true'),
      };
    case OBTENER_TIROS_USUARIO:
      return {
        ...state,
        tirosPorUsuario: action.payload,
      };

    default:
      return state;
  }
};

export default jugadoresReducer;
