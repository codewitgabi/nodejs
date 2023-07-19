const assert = require("assert");

let a = 12;
let b = 34;

const add = (a, b) => {
  return a + b;
}

const div = (a, b) => {
  assert(b > 0, "Zero division error!");

  return a / b;
}

/* Tests */

assert.equal(add(5, 6), 11);
assert.equal(add(6, -3), 3);
assert.equal(add(-5, 8), 3);

console.log(div(6, 2));
console.log(div(2, 0));

/* Other assertion methods are */

// .fail()
// .notEqual()
// .deepEqual()
// .notDeepEqual()
// .strictEqual()
// .notStrictEqual()
// .throws()
// .ifError()