const longDelay = require('./code');

describe('When passed', () => {
  it('three numbers, it should return the sum', () => {
    const expectedOutput = 3;
    expect(longDelay(1)(1)(1)()).toBe(expectedOutput);
  });
  it('one number, it should return the sum', () => {
    const expectedOutput = 1;
    expect(longDelay(1)()).toBe(expectedOutput);
  });
  it('numbers (one positive and one negative), it should return the sum', () => {
    const expectedOutput = 0;
    expect(longDelay(1)(-1)()).toBe(expectedOutput);
  });
  it('zeros, it should return the sum', () => {
    const expectedOutput = 0;
    expect(longDelay(0)(0)(0)(0)()).toBe(expectedOutput);
  });
  it('floats, it should return the sum', () => {
    const expectedOutput = 0.3;
    expect(longDelay(0.1)(0.2)()).toBeCloseTo(expectedOutput);
  });
});
