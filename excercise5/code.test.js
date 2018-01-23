const callAndApply = require('./code');

describe('When arguments are passed as', () => {
  it('argument list', () => {
    const toBeApplied = {};
    const expectedObject = {
      a: 1,
      b: 2,
      c: 3,
    };
    const fun = (aArg, bArg) => {
      expect(callAndApply.caller());
    };
  });
  it('argument array', () => {

  });
});

