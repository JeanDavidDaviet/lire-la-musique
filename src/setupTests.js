import '@testing-library/jest-dom';

// Mock localStorage for tests
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  },
  writable: true,
});

// Mock window.perlinX for NoteFactory tests
global.window = global.window || {};
window.perlinX = 0;

// Mock Audio constructor for audio-related tests
global.Audio = jest.fn().mockImplementation(() => ({
  play: jest.fn(),
  pause: jest.fn(),
  load: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  currentTime: 0,
  duration: 0,
  volume: 1,
}));

// Suppress console warnings during tests
const originalConsoleWarn = console.warn;
beforeEach(() => {
  console.warn = jest.fn();
});

afterEach(() => {
  console.warn = originalConsoleWarn;
  jest.clearAllMocks();
});