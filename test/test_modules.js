const assert = require("assert");
const {
  add,
  sub,
  div
} = require("../math_functions");

describe("Math", function() {
  context("#add", function() {
    it("Return the sum of numbers ranging from two and above.", function() {
      assert.equal(add(1, 2), 3)
      assert.equal(add(1, 5, 0, 2), 8)
      assert.equal(add(1, -3), -2)
    })
  })

  context("#sub", function() {
    it("Returns the difference between numbers ranging from two and above", function() {
      assert.equal(sub(6, 5), 1)
      assert.equal(sub(6, 5, 12), -11)
      assert.equal(sub(-2, 5, 8, -9), -6)
    })
  })

  context("#div", function() {
    it("Returns the division of numbers ranging from two and above", function() {
      assert.equal(div(2, 1), 2)
      assert.notStrictEqual(div(2, 3, 4), 0.166)
      assert.strictEqual(div(2, 0), Infinity)
      assert.strictEqual(div(-1, -5), 0.2)
      assert.strictEqual(div(-1, 5), -0.2)
      assert.strictEqual(div(-1, 5, -8), 0.025)
    })
  })
})