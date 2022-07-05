const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns 'true' for same arrays", () => {
    const input = [1, 2, 3];
    const expected = [1,2,3];
    assert.isTrue(eqArrays([1,2,3],[1,2,3]));
  });
  it("returns 'false' for different arrays", () => {
    const input = [1, 2, 3];
    const expected = [3,2,1];
    assert.isFalse(eqArrays([1,2,3],[3,2,1]));
  });
  it("returns 'true' for same  number-string arrays ", () => {
    const input = ["1", "2", "3"];
    const expected = ["1", "2", "3"];
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });
  it("returns 'false' for  mixed number-string arrays ", () => {
    const input = [1, 2, 3];
    const expected = [1, 2, "3"];
    assert.isFalse(eqArrays([1, 2, 3], [1, 2, "3"]));
  });
});
