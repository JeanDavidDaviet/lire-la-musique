import configReducer from '../config.reducer';
import {
  SET_RUNNING,
  SET_VOLUME,
  SET_NOTATION,
  SET_CLEF,
  SET_TIME,
  SET_INSTRUMENT
} from '../../actions/actionTypes';

describe('configReducer', () => {
  const initialState = {
    clef: true,
    time: "4/4",
    running: false,
    volume: false,
    instrument: 0,
    context: false,
    notation: false
  };

  it('should return initial state when no action is provided', () => {
    const result = configReducer(undefined, {});
    expect(result).toEqual(initialState);
  });

  it('should handle SET_CLEF action by toggling clef value', () => {
    const action = { type: SET_CLEF };
    
    const result = configReducer(initialState, action);
    expect(result.clef).toBe(false);
    expect(result).toEqual({
      ...initialState,
      clef: false
    });

    const resultToggleBack = configReducer(result, action);
    expect(resultToggleBack.clef).toBe(true);
  });

  it('should handle SET_TIME action by setting time signature', () => {
    const action = { type: SET_TIME, payload: "3/4" };
    
    const result = configReducer(initialState, action);
    expect(result.time).toBe("3/4");
    expect(result).toEqual({
      ...initialState,
      time: "3/4"
    });
  });

  it('should handle SET_INSTRUMENT action by setting instrument', () => {
    const action = { type: SET_INSTRUMENT, payload: 5 };
    
    const result = configReducer(initialState, action);
    expect(result.instrument).toBe(5);
    expect(result).toEqual({
      ...initialState,
      instrument: 5
    });
  });

  it('should handle SET_RUNNING action by toggling running value', () => {
    const action = { type: SET_RUNNING };
    
    const result = configReducer(initialState, action);
    expect(result.running).toBe(true);
    expect(result).toEqual({
      ...initialState,
      running: true
    });

    const resultToggleBack = configReducer(result, action);
    expect(resultToggleBack.running).toBe(false);
  });

  it('should handle SET_VOLUME action by toggling volume value', () => {
    const action = { type: SET_VOLUME };
    
    const result = configReducer(initialState, action);
    expect(result.volume).toBe(true);
    expect(result).toEqual({
      ...initialState,
      volume: true
    });
  });

  it('should handle SET_NOTATION action by toggling notation value', () => {
    const action = { type: SET_NOTATION };
    
    const result = configReducer(initialState, action);
    expect(result.notation).toBe(true);
    expect(result).toEqual({
      ...initialState,
      notation: true
    });
  });

  it('should return current state for unknown action types', () => {
    const currentState = { ...initialState, running: true };
    const action = { type: 'UNKNOWN_ACTION' };
    
    const result = configReducer(currentState, action);
    expect(result).toEqual(currentState);
  });

  it('should not mutate the original state', () => {
    const originalState = { ...initialState };
    const action = { type: SET_RUNNING };
    
    configReducer(originalState, action);
    expect(originalState).toEqual(initialState);
  });
});