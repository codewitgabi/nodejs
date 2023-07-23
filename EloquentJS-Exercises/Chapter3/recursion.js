function isEven(N) {
  if (N < 0) return false;

  // base case
  if (N === 0 || N === 1) return N != true;

  return isEven(N - 2);
}

module.exports = { isEven };
