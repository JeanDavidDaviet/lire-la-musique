import { RUNNING, VOLUME, SET_CLEF, SET_TIME, SET_INSTRUMENT, DISPLAY_LATIN } from "../actions/actionTypes";

const initialState = {
  clef: true,
  time: "4/4",
  running: false,
  volume: false,
  instrument: 0,
  context: false,
  displayLatin: false
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
    case VOLUME:
      return {
        ...state,
        volume: !state.volume
      }
    case DISPLAY_LATIN:
      return {
        ...state,
        displayLatin: !state.displayLatin
      }
    default: {
      return state;
    }
  }
};

export default configReducer;
