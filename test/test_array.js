const assert = require("assert");

describe("Array", function () {
  describe("#indexOf()", function () {
    it("Should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(5), -1);
      assert.equal([1, 2, 3].indexOf("2"), -1);
    })
    it("should return the index if present", function () {
      assert.equal([1, 2, 3].indexOf(1), 0);
      assert.equal([1, 2, 2].indexOf(2), 1);
    })
    it("should return the index of the first occurence for multiple values", function () {
      assert.equal([0, 2, 1, 0, 6].indexOf(0), 0)
    })
  })
  describe("#length", function() {
    it("Should return the number of items in the array", function () {
      //this.retries(5)
      assert.equal([].length, 0);
      assert.equal(["Hello", true, 6].length, 3);
    })
  })
})