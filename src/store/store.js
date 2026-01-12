import { createStore, compose } from 'redux';
import rootReducer from './reducers';
import DevTools from './DevTools';

let enhancer;
if (process.env.NODE_ENV === 'development' && window.location.search === '?redux') {
  enhancer = compose(DevTools.instrument());
}

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

const store = createStore(rootReducer, loadState(), enhancer);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
