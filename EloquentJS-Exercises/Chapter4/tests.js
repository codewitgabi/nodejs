const assert = require("assert");
const {
  range,
  sum
} = require("./sumOfARange");
const {
  deepEqual
} = require("./deepComparison");

// Test for sum

assert.equal(sum(range(1, 3)), 6);
assert.equal(sum(range(-1, 3)), 5);
assert.equal(sum(range(1, 10, 2)), 25);

// Test for using using deepEqual

assert.deepEqual(deepEqual(range(0, 5), [0, 1, 2, 3, 4, 5]), true);
assert.deepEqual(deepEqual(range(-3, 1), [-3, -2, -1, 0, 1]), true);
assert.deepEqual(deepEqual(range(-3, 1), [-3, -2, -1, 0]), false);
assert.deepEqual(deepEqual("3", "3"), true);
assert.deepEqual(deepEqual(2, "2"), false);
assert.deepEqual(deepEqual([1, 2, 4], [1, 2, 3]), false);
assert.deepEqual(deepEqual([1, 2, 3], [1, 2, 3]), true);
