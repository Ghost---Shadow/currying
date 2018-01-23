const longDelay = (num1) => {
  let accumulator = 0;
  if (num1 === undefined) {
    return accumulator;
  }
  accumulator += num1;
  const inner = (num2) => {
    if (num2 === undefined) {
      return accumulator;
    }
    accumulator += num2;
    return inner;
  };
  return inner;
};

module.exports = longDelay;

// console.log(longDelay(1)(2)(3)());
