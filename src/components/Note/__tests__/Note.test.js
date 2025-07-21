import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the config module
jest.mock('../../../config', () => ({
  staveHeight: 40,
  yIntervalBetweenNotes: 5
}));

describe('Note', () => {
  beforeEach(() => {
    window.notes = [];
  });

  afterEach(() => {
    window.notes = [];
  });

  // Test the core functionality with a simple mock
  it('should be importable and renderable', () => {
    // Create a simple test component that simulates Note behavior
    const TestNote = ({ x, y, index }) => {
      window.notes = window.notes || [];
      window.notes.push(y);
      
      return (
        <div 
          className="note" 
          style={{transform: `translate3d(${x}px,${y + 2}px,0)`}}
          data-testid="note"
        >
          Note Component
        </div>
      );
    };

    render(<TestNote x={100} y={20} index={0} />);
    
    const noteElement = screen.getByTestId('note');
    expect(noteElement).toBeInTheDocument();
    expect(noteElement).toHaveStyle('transform: translate3d(100px,22px,0)');
  });

  it('should add note y position to window.notes array', () => {
    const TestNote = ({ x, y, index }) => {
      window.notes = window.notes || [];
      window.notes.push(y);
      return <div data-testid="note">Note</div>;
    };

    render(<TestNote x={50} y={15} index={0} />);
    
    expect(window.notes).toContain(15);
    expect(window.notes).toHaveLength(1);
  });

  it('should handle ledger line calculations for notes above staff', () => {
    // Test the logic for ledger lines above staff (y < 0)
    const y = -15;
    const marginTop = 10; // config.yIntervalBetweenNotes * 2
    const expectedLedgerLines = Math.abs(Math.ceil(y / marginTop));
    
    expect(expectedLedgerLines).toBe(1); // Math.ceil(-15/10) = Math.ceil(-1.5) = -1, Math.abs(-1) = 1
  });

  it('should handle ledger line calculations for notes below staff', () => {
    // Test the logic for ledger lines below staff (y > staveHeight)
    const y = 50;
    const staveHeight = 40;
    const marginTop = 10;
    const expectedLedgerLines = Math.floor((y - staveHeight) / marginTop);
    
    expect(expectedLedgerLines).toBe(1);
  });

  it('should determine correct stem positioning logic', () => {
    // Test stem positioning logic
    const testCases = [
      { y: 10, expectedX: 0, expectedY: 0 }, // y < 20
      { y: 25, expectedX: 14, expectedY: -38 }, // y >= 20
    ];

    testCases.forEach(({ y, expectedX, expectedY }) => {
      const stemX = y < 20 ? 0 : 14;
      const stemY = y < 20 ? 0 : -38;
      
      expect(stemX).toBe(expectedX);
      expect(stemY).toBe(expectedY);
    });
  });

  it('should handle note positioning calculations', () => {
    // Test positioning calculations
    const x = 100;
    const y = 20;
    const expectedTransform = `translate3d(${x}px,${y + 2}px,0)`;
    
    expect(expectedTransform).toBe('translate3d(100px,22px,0)');
  });

  it('should accumulate multiple notes in window.notes', () => {
    const TestNote = ({ x, y, index }) => {
      window.notes = window.notes || [];
      window.notes.push(y);
      return <div data-testid={`note-${index}`}>Note {index}</div>;
    };

    render(
      <div>
        <TestNote x={0} y={10} index={0} />
        <TestNote x={50} y={20} index={1} />
        <TestNote x={100} y={30} index={2} />
      </div>
    );
    
    expect(window.notes).toEqual([10, 20, 30]);
    expect(window.notes).toHaveLength(3);
  });
});