import { INCREMENT_TEMPO, DECREMENT_TEMPO, SET_TEMPO } from "../actions/actionTypes";

const tempoReducer = (state = {tempo: 60}, action) => {
  switch (action.type) {
    case INCREMENT_TEMPO:
      return {
        ...state,
        tempo: state.tempo < 120 ? state.tempo + 20 : state.tempo
      }
    case DECREMENT_TEMPO:
      return {
        ...state,
        tempo: state.tempo > 20 ? state.tempo - 20 : state.tempo
      }
    case SET_TEMPO:
      return {
        ...state,
        tempo: action.payload
      }
    default: {
      return state;
    }
  }
};

export default tempoReducer;
