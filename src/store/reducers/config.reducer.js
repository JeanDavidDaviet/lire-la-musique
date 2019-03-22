import { RUNNING, SET_CLEF, SET_TIME, SET_INSTRUMENT } from "../actions/actionTypes";

const initialState = {
  clef: true,
  time: "4/4",
  running: false,
  instrument: 0,
  context: false,
  counter: 0
};

const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLEF:
      return {
        ...state,
        clef: !state.clef
      }
    case SET_TIME:
      return {
        ...state,
        time: action.payload
      }
    case SET_INSTRUMENT:
      return {
        ...state,
        instrument: action.payload
      }
    case RUNNING:
      return {
        ...state,
        running: !state.running
      }
    default: {
      return state;
    }
  }
};

export default configReducer;
