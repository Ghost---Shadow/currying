const binary = require('./code');

describe('When passed two', () => {
  it('integers, it should return the sum', () => {
    const [a, b] = [1, 2];
    const expectedOutput = 3;
    expect(binary(a)(b)).toBe(expectedOutput);
  });
  it('negative numbers, it should return the sum', () => {
    const [a, b] = [-1, -2];
    const expectedOutput = -3;
    expect(binary(a)(b)).toBe(expectedOutput);
  });
  it('numbers (one positive and one negative), it should return the sum', () => {
    const [a, b] = [-1, 2];
    const expectedOutput = 1;
    expect(binary(a)(b)).toBe(expectedOutput);
  });
  it('zeros, it should return the sum', () => {
    const [a, b] = [0, 0];
    const expectedOutput = 0;
    expect(binary(a)(b)).toBe(expectedOutput);
  });
  it('floats, it should return the sum', () => {
    const [a, b] = [1.5, 2.6];
    const expectedOutput = 4.1;
    expect(binary(a)(b)).toBeCloseTo(expectedOutput);
  });
});
