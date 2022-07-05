const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns empty-array if input if empty", () => {
    let input = [];
    let expected = [];
    assert.deepEqual(middle(input), expected);
  });

  it("returns empty-array if input-array has 2 elements", () => {
    let input = [1, 2];
    let expected = [];
    assert.deepEqual(middle(input), expected);
  });

  it("returns middle index for arrays with odd number of elements", () => {
    let input = [1,2,3];
    let expected = [2];
    assert.deepEqual(middle(input), expected);
  });

  it("returns 2 middle index for arrays with even number of elements", () => {
    let input = [1, 2, 3, 4];
    let expected = [2, 3];
    assert.deepEqual(middle(input), expected);
  });

});
