const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns 'true' for same arrays", () => {
    const input = [1, 2, 3];
    const expected = [1,2,3];
    assert.isTrue(assertArraysEqual([1,2,3],[1,2,3]));
  });
  it("returns 'false' for different arrays", () => {
    const input = [1, 2, 3];
    const expected = [3,2,1];
    assert.isFalse(assertArraysEqual([1,2,3],[3,2,1]));
  });
  it("returns 'true' for same  number-string arrays ", () => {
    const input = ["1", "2", "3"];
    const expected = ["1", "2", "3"];
    assert.isTrue(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
  });
  it("returns 'false' for  mixed number-string arrays ", () => {
    const input = [1, 2, 3];
    const expected = [1, 2, "3"];
    assert.isFalse(assertArraysEqual([1, 2, 3], [1, 2, "3"]));
  });
});
