const identity = require('./code');

describe('When passed', () => {
  it('a number it returns the same number', () => {
    const input = 1;
    const expectedOutput = 1;
    expect(identity(input)).toBe(expectedOutput);
  });
  it('a string it returns the same string', () => {
    const input = 1;
    const expectedOutput = 1;
    expect(identity(input)).toBe(expectedOutput);
  });
  it('an array it returns the same array', () => {
    const input = [1, 2, 3];
    const expectedOutput = [1, 2, 3];
    expect(identity(input)).toEqual(expectedOutput);
  });
  it('an object it returns the same object', () => {
    const input = { a: 1, b: 2 };
    const expectedOutput = { a: 1, b: 2 };
    expect(identity(input)).toEqual(expectedOutput);
  });
});
