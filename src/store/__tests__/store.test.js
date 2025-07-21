import store from '../store';
import { SET_RUNNING, SET_CLEF, SET_TIME } from '../actions/actionTypes';

describe('Store', () => {
  beforeEach(() => {
    window.localStorage.clear();
    jest.clearAllMocks();
  });

  describe('localStorage persistence', () => {
    it('should save state to localStorage when state changes', () => {
      const action = { type: SET_RUNNING };
      
      store.dispatch(action);
      
      expect(window.localStorage.setItem).toHaveBeenCalledWith(
        'state',
        expect.stringContaining('"running":true')
      );
    });

    it('should load initial state from localStorage if available', () => {
      const mockState = {
        configReducer: {
          clef: false,
          time: "3/4",
          running: false,
          volume: true,
          instrument: 2,
          context: false,
          notation: true
        },
        scaleReducer: { currentScale: 0 },
        tempoReducer: { tempo: 120 }
      };

      window.localStorage.getItem.mockReturnValue(JSON.stringify(mockState));
      
      // Import store again to trigger loadState
      jest.resetModules();
      const newStore = require('../store').default;
      
      const state = newStore.getState();
      expect(state.configReducer.clef).toBe(false);
      expect(state.configReducer.time).toBe("3/4");
      expect(state.configReducer.volume).toBe(true);
      expect(state.configReducer.notation).toBe(true);
      // running should always be set to false when loading from localStorage
      expect(state.configReducer.running).toBe(false);
    });

    it('should handle corrupted localStorage data gracefully', () => {
      window.localStorage.getItem.mockReturnValue('invalid json');
      
      jest.resetModules();
      const newStore = require('../store').default;
      
      // Should fallback to default initial state
      const state = newStore.getState();
      expect(state.configReducer.clef).toBe(true);
      expect(state.configReducer.time).toBe("4/4");
      expect(state.configReducer.running).toBe(false);
    });

    it('should handle localStorage.setItem errors gracefully', () => {
      window.localStorage.setItem.mockImplementation(() => {
        throw new Error('Storage quota exceeded');
      });
      
      const action = { type: SET_CLEF };
      
      // Should not throw error even if localStorage fails
      expect(() => store.dispatch(action)).not.toThrow();
    });

    it('should set running to false when loading from localStorage', () => {
      const mockState = {
        configReducer: {
          clef: true,
          time: "4/4",
          running: true, // This should be overridden to false
          volume: false,
          instrument: 0,
          context: false,
          notation: false
        }
      };

      window.localStorage.getItem.mockReturnValue(JSON.stringify(mockState));
      
      jest.resetModules();
      const newStore = require('../store').default;
      
      const state = newStore.getState();
      expect(state.configReducer.running).toBe(false);
    });
  });


  describe('store functionality', () => {
    it('should dispatch actions and update state correctly', () => {
      // Create a fresh store for this test
      jest.resetModules();
      const { createStore } = require('redux');
      const rootReducer = require('../reducers').default;
      const testStore = createStore(rootReducer);
      
      const initialState = testStore.getState();
      
      testStore.dispatch({ type: SET_RUNNING });
      
      const newState = testStore.getState();
      expect(newState.configReducer.running).toBe(!initialState.configReducer.running);
    });

    it('should maintain state consistency across multiple dispatches', () => {
      // Create a fresh store for this test
      jest.resetModules();
      const { createStore } = require('redux');
      const rootReducer = require('../reducers').default;
      const testStore = createStore(rootReducer);
      
      const initialState = testStore.getState();
      
      testStore.dispatch({ type: SET_TIME, payload: "2/4" });
      testStore.dispatch({ type: SET_CLEF });
      testStore.dispatch({ type: SET_RUNNING });
      
      const state = testStore.getState();
      expect(state.configReducer.time).toBe("2/4");
      expect(state.configReducer.clef).toBe(!initialState.configReducer.clef); // toggled from initial value
      expect(state.configReducer.running).toBe(!initialState.configReducer.running); // toggled from initial value
    });
  });
});