const assert = require("assert");

const { min } = require("./minimum");
const { isEven } = require("./recursion");
const { countBs, countChar } = require("./beanCounting");

// Test for min

assert.equal(min(2, 3), 2);
assert.equal(min(2, 2), 2);
assert.equal(min(2, -1), -1);
assert.equal(min(-2, 6), -2);
assert.equal(min(0, 2), 0);
assert.equal(min(-8, 0), -8);

// Test for isEven

assert.equal(isEven(50), true);
assert.equal(isEven(75), false);
assert.equal(isEven(0), true);
assert.equal(isEven(1), false);
assert.equal(isEven(5), false);
assert.equal(isEven(8), true);
assert.equal(isEven(50), true);
assert.equal(isEven(75), false);
assert.equal(isEven(-1), false);

// Test for countBs

assert.equal(countBs("Hello"), 0);
assert.equal(countBs("Buba"), 1);
assert.equal(countBs("BABOON"), 2);

// Test for countChar

assert.equal(countChar("Hello", "l"), 2);
assert.equal(countChar("Buba", "a"), 1);
assert.equal(countChar("BABOON", "O"), 2);
