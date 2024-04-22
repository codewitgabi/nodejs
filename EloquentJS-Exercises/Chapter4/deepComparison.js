function deepEqual(actual, expected) {
  if ((typeof actual === typeof expected) && (typeof actual === "number" || typeof actual === "string")) {
    return actual === expected;
  }

  // Array comparison

  if (typeof actual === typeof expected && actual.constructor === Array) {
    if (actual.length !== expected.length) {
      return false;
    } else {
      let count = 0;
      for (let i in actual) {
        if (actual[i] === expected[i]) {
          count++;
        } else {
          return false;
        }
      }

      if (count === actual.length) {
        return true;
      }
    }
  }

  // Object comparison here...

  if (typeof actual !== typeof expected) {
    return false;
  }
}
// console.log(deepEqual({a: 2}, {a: 2}))
module.exports = {
  deepEqual
};