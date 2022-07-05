const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns 'true' for 1===1", () => {
    let actual = 1;
    let expected = 1;
    assert.isTrue(assertEqual(actual,expected))
  });

  it("returns 'true' for 'bootcamp' === 'bootcamp'", () => {
    assert.equal(assertEqual('bootcamp' ,'bootcamp'), true);
  });
  
  it("returns 'false' for '7' === 7", () => {
    assert.equal(assertEqual('7' ,7), false);
  });
  

});