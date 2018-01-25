const callAndApply = require('./code');

describe('When arguments are passed as', () => {
  it('argument list', () => {
    const toBeAppliedTo = {};
    const expectedObject = {
      a: 1,
      b: 2,
      c: 3,
    };
    function fun(aArg, bArg, cArg) {
      this.a = aArg;
      this.b = bArg;
      this.c = cArg;
    }
    callAndApply.caller(toBeAppliedTo, fun, 1, 2, 3);
    expect(toBeAppliedTo).toEqual(expectedObject);
  });
  it('argument array', () => {
    const toBeAppliedTo = {};
    const expectedObject = {
      a: 1,
      b: 2,
      c: 3,
    };
    function fun(aArg, bArg, cArg) {
      this.a = aArg;
      this.b = bArg;
      this.c = cArg;
    }
    callAndApply.applier(toBeAppliedTo, fun, [1, 2, 3]);
    expect(toBeAppliedTo).toEqual(expectedObject);
  });
});

