import { RUNNING, VOLUME, DISPLAY_LATIN, INCREMENT_TEMPO, DECREMENT_TEMPO, INCREMENT_SCALE, DECREMENT_SCALE, SET_SCALE, SET_TEMPO, SET_CLEF, SET_TIME, SET_INSTRUMENT } from "../actions/actionTypes";

export const setRunning = () => ({
  type: RUNNING
})
export const setVolume = () => ({
  type: VOLUME
})
export const setDisplayLatin = () => ({
  type: DISPLAY_LATIN
})
export const incrementTempo = () => ({
  type: INCREMENT_TEMPO
})
export const decrementTempo = () => ({
  type: DECREMENT_TEMPO
})
export const incrementScale = () => ({
  type: INCREMENT_SCALE
})
export const decrementScale = () => ({
  type: DECREMENT_SCALE
})
export const setScale = (value) => ({
  type: SET_SCALE,
  payload: value
})
export const setTempo = (value) => ({
  type: SET_TEMPO,
  payload: value
})
export const setClef = () => ({
  type: SET_CLEF
})
export const setTime = (value) => ({
  type: SET_TIME,
  payload: value
})
export const setInstrument = (value) => ({
  type: SET_INSTRUMENT,
  payload: value
})
