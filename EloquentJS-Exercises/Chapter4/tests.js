const assert = require("assert");
const { range, sum } = require("./sumOfARange");

// Test for sum

assert.equal(sum(range(1, 3)), 6);
assert.equal(sum(range(-1, 3)), 5);
assert.equal(sum(range(1, 10, 2)), 25);
