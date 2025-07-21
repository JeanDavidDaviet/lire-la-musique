import React from 'react';
import { render, screen } from '@testing-library/react';
import NoteFactory from '../NoteFactory';

// Mock the config module
jest.mock('../../../config', () => ({
  yIntervalBetweenNotes: 5,
  staveWidth: 200,
  MN_centerNote: 6,
  staveHeight: 40,
  minNote: 70,
  maxNote: -20
}));

// Mock the perlin noise module
jest.mock('../../../perlin', () => ({
  noise: {
    seed: jest.fn(),
    perlin2: jest.fn()
  }
}));

// Mock the utils module
jest.mock('../../../utils', () => ({
  map_range: jest.fn()
}));

// Mock the Note component
jest.mock('../Note', () => {
  return function MockNote(props) {
    return (
      <div 
        data-testid="note" 
        data-x={props.x} 
        data-y={props.y} 
        data-note-key={props.index}
        data-index={props.index}
      >
        Note
      </div>
    );
  };
});

describe('NoteFactory', () => {
  let mockPerlin, mockMapRange;

  beforeEach(() => {
    // Setup mocks
    mockPerlin = require('../../../perlin').noise.perlin2;
    mockMapRange = require('../../../utils').map_range;
    
    // Reset window.perlinX
    window.perlinX = 0;
    
    // Reset Math mocks
    jest.restoreAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render the correct number of notes based on beatsPerStave', () => {
    mockPerlin.mockReturnValue(0.5);
    mockMapRange.mockReturnValue(25);

    render(<NoteFactory beatsPerStave={4} />);
    
    const notes = screen.getAllByTestId('note');
    expect(notes).toHaveLength(4);
  });

  it('should generate notes with correct x positioning', () => {
    mockPerlin.mockReturnValue(0.5);
    mockMapRange.mockReturnValue(25);

    render(<NoteFactory beatsPerStave={3} />);
    
    const notes = screen.getAllByTestId('note');
    
    // Check x positions: (i * staveWidth / beatsPerStave) + (staveWidth / 8) - MN_centerNote
    // For beatsPerStave=3, staveWidth=200, MN_centerNote=6:
    // Note 0: (0 * 200/3) + (200/8) - 6 = 0 + 25 - 6 = 19
    // Note 1: (1 * 200/3) + (200/8) - 6 = 66.67 + 25 - 6 = 85.67
    // Note 2: (2 * 200/3) + (200/8) - 6 = 133.33 + 25 - 6 = 152.33
    
    expect(notes[0]).toHaveAttribute('data-x', '19');
    expect(notes[1]).toHaveAttribute('data-x', '85.66666666666667');
    expect(notes[2]).toHaveAttribute('data-x', '152.33333333333334');
  });

  it('should generate notes with y positions rounded to nearest fifth', () => {
    mockPerlin.mockReturnValue(0.5);
    mockMapRange.mockReturnValue(23); // This should round to 25

    render(<NoteFactory beatsPerStave={2} />);
    
    const notes = screen.getAllByTestId('note');
    
    // Both notes should have y position rounded to nearest 5
    expect(notes[0]).toHaveAttribute('data-y', '25');
    expect(notes[1]).toHaveAttribute('data-y', '25');
  });

  it('should assign correct key and index props to each note', () => {
    mockPerlin.mockReturnValue(0.5);
    mockMapRange.mockReturnValue(25);

    render(<NoteFactory beatsPerStave={3} />);
    
    const notes = screen.getAllByTestId('note');
    
    expect(notes[0]).toHaveAttribute('data-note-key', '0');
    expect(notes[0]).toHaveAttribute('data-index', '0');
    
    expect(notes[1]).toHaveAttribute('data-note-key', '1');
    expect(notes[1]).toHaveAttribute('data-index', '1');
    
    expect(notes[2]).toHaveAttribute('data-note-key', '2');
    expect(notes[2]).toHaveAttribute('data-index', '2');
  });

  it('should increment window.perlinX for each note generation', () => {
    mockPerlin.mockReturnValue(0.5);
    mockMapRange.mockReturnValue(25);

    window.perlinX = 5;

    render(<NoteFactory beatsPerStave={2} />);
    
    // window.perlinX should have been incremented twice (once for each note)
    expect(window.perlinX).toBe(7);
  });

  it('should handle first note positioning to avoid chord name overlap', () => {
    mockPerlin.mockReturnValueOnce(0.1); // First call returns low value
    mockMapRange.mockReturnValueOnce(5); // Maps to 5 (below marginTop which is 10)
    
    mockPerlin.mockReturnValueOnce(0.8); // Second call for regeneration
    mockMapRange.mockReturnValueOnce(40); // Maps to higher value
    
    render(<NoteFactory beatsPerStave={1} />);
    
    const note = screen.getByTestId('note');
    
    // Should use the second generated value (40 rounded to 40)
    expect(note).toHaveAttribute('data-y', '40');
    
    // Perlin should have been called twice for the first note
    expect(mockPerlin).toHaveBeenCalledTimes(2);
  });

  it('should use different perlin noise values for each note', () => {
    mockPerlin
      .mockReturnValueOnce(0.2)
      .mockReturnValueOnce(0.8)
      .mockReturnValueOnce(-0.5);
    
    mockMapRange
      .mockReturnValueOnce(15)
      .mockReturnValueOnce(45)
      .mockReturnValueOnce(30);

    render(<NoteFactory beatsPerStave={3} />);
    
    const notes = screen.getAllByTestId('note');
    
    expect(notes[0]).toHaveAttribute('data-y', '15');
    expect(notes[1]).toHaveAttribute('data-y', '45');
    expect(notes[2]).toHaveAttribute('data-y', '30');
  });

  it('should handle edge case with zero beats per stave', () => {
    render(<NoteFactory beatsPerStave={0} />);
    
    const notes = screen.queryAllByTestId('note');
    expect(notes).toHaveLength(0);
  });
});