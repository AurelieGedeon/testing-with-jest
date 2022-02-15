const sum = (a, b) => {
  if (!(a && b)) {
    return "Invalid Input";
  }
  return a + b;
};

const square = (a) => {
  if (!a) {
    return "Invalid Input";
  }
  return a * a;
};

const cube = (a) => {
  if (!a) {
    return "Invalid Input";
  }
  return a ** 3;
};

const exponent = (num, power = 1) => {
  return num ** power;
};

module.exports = { sum, square, cube };
