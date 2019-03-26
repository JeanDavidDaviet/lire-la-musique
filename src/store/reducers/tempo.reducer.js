import { INCREMENT_TEMPO, DECREMENT_TEMPO, SET_TEMPO } from "../actions/actionTypes";
import config from "../../config";

const tempoReducer = (state = {tempo: 60}, action) => {
  switch (action.type) {
    case INCREMENT_TEMPO:
      return {
        ...state,
        tempo: state.tempo < config.tempoMaxBPM ? state.tempo + config.tempoGapUnit : state.tempo
      }
    case DECREMENT_TEMPO:
      return {
        ...state,
        tempo: state.tempo > config.tempoGapUnit ? state.tempo - config.tempoGapUnit : state.tempo
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
