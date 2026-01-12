import {
  SET_RUNNING,
  SET_VOLUME,
  INCREMENT_TEMPO,
  DECREMENT_TEMPO,
  INCREMENT_SCALE,
  DECREMENT_SCALE,
  SET_SCALE,
  SET_NOTATION,
  SET_TEMPO,
  SET_CLEF,
  SET_TIME,
  SET_INSTRUMENT,
} from '../actions/actionTypes';

export const setRunning = () => ({
  type: SET_RUNNING,
});
export const setVolume = () => ({
  type: SET_VOLUME,
});
export const incrementTempo = () => ({
  type: INCREMENT_TEMPO,
});
export const decrementTempo = () => ({
  type: DECREMENT_TEMPO,
});
export const incrementScale = () => ({
  type: INCREMENT_SCALE,
});
export const decrementScale = () => ({
  type: DECREMENT_SCALE,
});
export const setScale = (value) => ({
  type: SET_SCALE,
  payload: value,
});
export const setNotation = (value) => ({
  type: SET_NOTATION,
});
export const setTempo = (value) => ({
  type: SET_TEMPO,
  payload: value,
});
export const setClef = () => ({
  type: SET_CLEF,
});
export const setTime = (value) => ({
  type: SET_TIME,
  payload: value,
});
export const setInstrument = (value) => ({
  type: SET_INSTRUMENT,
  payload: value,
});
