import { INCREMENT_SCALE, DECREMENT_SCALE, SET_SCALE } from "../actions/actionTypes";
import scales from "../../scales";

const scaleReducer = (state = {chosenScale: "C"}, action) => {
  switch (action.type) {
    case INCREMENT_SCALE:
      return {
        ...state,
        chosenScale: calculateScale(INCREMENT_SCALE, state.chosenScale)
      }
    case DECREMENT_SCALE:
      return {
        ...state,
        chosenScale: calculateScale(DECREMENT_SCALE, state.chosenScale)
      }
    case SET_SCALE:
      return {
        ...state,
        chosenScale: action.payload
      }
    default: {
      return state;
    }
  }
};

export default scaleReducer;

const calculateScale = (ACTION_TYPE, chosenScale) => {
  if (ACTION_TYPE === undefined) return;
  const scalesArray = Object.keys(scales);
  const sortedScale = scalesArray.sort();
  if (ACTION_TYPE === INCREMENT_SCALE) {
    return sortedScale[(sortedScale.indexOf(chosenScale) + 1) % scalesArray.length];
  }
  if (ACTION_TYPE === DECREMENT_SCALE) {
    return sortedScale[(sortedScale.indexOf(chosenScale) - 1 + scalesArray.length) % scalesArray.length];
  }
}