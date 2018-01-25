const currier = require('./code');

describe('Function call with 3 args when', () => {
  function abc(a, b, c) {
    return a + b + c;
  }
  const curriedAbc = currier(abc);
  it('curriedAbc(a)(b)(c)', () => {
    expect(curriedAbc(1)(2)(3)).toBe(6);
  });
  it('curriedAbc(a,b)(c)', () => {
    expect(curriedAbc(1)(2)(3)).toBe(6);
  });
  it('curriedAbc(a)(b,c)', () => {
    expect(curriedAbc(1)(2)(3)).toBe(6);
  });
  it('curriedAbc(a,b,c)', () => {
    expect(curriedAbc(1)(2)(3)).toBe(6);
  });
});

describe('Peculiar function call when', () => {
  function abc(a, b, c) {
    return a + b + c;
  }
  const curriedAbc = currier(abc);
  it('curriedAbc()', () => {
    expect(typeof curriedAbc()).toBe('function');
  });
  it('curriedAbc(1)', () => {
    expect(typeof curriedAbc(1)).toBe('function');
  });
  it('curriedAbc(1,2)', () => {
    expect(typeof curriedAbc(1, 2)).toBe('function');
  });
  it('curriedAbc(1)(2)', () => {
    expect(typeof curriedAbc(1)(2)).toBe('function');
  });
});
