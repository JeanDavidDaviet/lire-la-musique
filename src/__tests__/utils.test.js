import { map_range } from '../utils';

describe('utils', () => {
  describe('map_range', () => {
    it('should map value from one range to another correctly', () => {
      // Test basic mapping: 0-100 to 0-10
      expect(map_range(50, 0, 100, 0, 10)).toBe(5);
      expect(map_range(0, 0, 100, 0, 10)).toBe(0);
      expect(map_range(100, 0, 100, 0, 10)).toBe(10);
    });

    it('should handle negative ranges', () => {
      // Test mapping from -1 to 1 to 0 to 100
      expect(map_range(0, -1, 1, 0, 100)).toBe(50);
      expect(map_range(-1, -1, 1, 0, 100)).toBe(0);
      expect(map_range(1, -1, 1, 0, 100)).toBe(100);
    });

    it('should handle inverted ranges', () => {
      // Test mapping where output range is inverted
      expect(map_range(0, 0, 100, 100, 0)).toBe(100);
      expect(map_range(50, 0, 100, 100, 0)).toBe(50);
      expect(map_range(100, 0, 100, 100, 0)).toBe(0);
    });

    it('should handle decimal values', () => {
      expect(map_range(0.5, 0, 1, 0, 10)).toBe(5);
      expect(map_range(0.25, 0, 1, 0, 100)).toBe(25);
      expect(map_range(0.7, 0, 1, -10, 10)).toBe(4);
    });

    it('should handle edge cases', () => {
      // Same input and output ranges
      expect(map_range(5, 0, 10, 0, 10)).toBe(5);
      
      // Single point ranges (division by zero case - should handle gracefully)
      // When high1 === low1, the function will return NaN due to division by zero
      // This is expected behavior, but we can test it explicitly
      expect(map_range(5, 5, 5, 0, 10)).toBeNaN();
    });

    it('should handle values outside input range', () => {
      // Values below input range
      expect(map_range(-10, 0, 100, 0, 10)).toBe(-1);
      
      // Values above input range
      expect(map_range(150, 0, 100, 0, 10)).toBe(15);
    });

    it('should maintain proportional relationships', () => {
      // Test that proportions are maintained
      const input1 = 25; // 25% of 0-100
      const input2 = 75; // 75% of 0-100
      
      const output1 = map_range(input1, 0, 100, 0, 200);
      const output2 = map_range(input2, 0, 100, 0, 200);
      
      expect(output1).toBe(50); // 25% of 0-200
      expect(output2).toBe(150); // 75% of 0-200
    });
  });
});