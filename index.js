const sum = (a, b) => {
  if (!(a && b)) {
    return "Invalid Input";
  }
  return a + b;
};

console.log("The sum is :", sum(null, 6));
module.exports = sum;
