const initialState = {
  chosenScale: "C",
  clef: true,
  time: "4/4",
  running: false,
  tempo: 60,
  instrument: 0,
  context: false,
  counter: 0
};

const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'RUNNING':
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
