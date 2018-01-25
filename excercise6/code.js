function curry(fx) {
  const arity = fx.length;

  return function f1(...args) {
    if (args.length >= arity) {
      return fx(...args);
    }

    return function f2(...args2) {
      return f1(...args.concat(args2));
    };
  };
}

module.exports = curry;
