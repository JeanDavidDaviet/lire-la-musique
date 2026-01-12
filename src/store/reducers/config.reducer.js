import {
  SET_RUNNING,
  SET_VOLUME,
  SET_NOTATION,
  SET_CLEF,
  SET_TIME,
  SET_INSTRUMENT,
} from '../actions/actionTypes';

const initialState = {
  clef: true,
  time: '4/4',
  running: false,
  volume: false,
  instrument: 0,
  context: false,
  notation: false,
};

const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLEF:
      return {
        ...state,
        clef: !state.clef,
      };
    case SET_TIME:
      return {
        ...state,
        time: action.payload,
      };
    case SET_INSTRUMENT:
      return {
        ...state,
        instrument: action.payload,
      };
    case SET_RUNNING:
      return {
        ...state,
        running: !state.running,
      };
    case SET_VOLUME:
      return {
        ...state,
        volume: !state.volume,
      };
    case SET_NOTATION:
      return {
        ...state,
        notation: !state.notation,
      };
    default: {
      return state;
    }
  }
};

export default configReducer;
