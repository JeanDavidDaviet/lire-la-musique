import { createStore } from "redux";
import rootReducer from "./reducers";

const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
      const state = JSON.parse(serializedState);
      state.configReducer.running = false;
      return state;
    } catch (err) {
      return undefined;
    }
};

const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch {
      // ignore write errors
    }
};


const store = createStore(rootReducer, loadState(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
