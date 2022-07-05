const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns 'true' for 1===1", () => {
    let actual = 1;
    let expected = 1;
    assert.isTrue(assertEqual(actual,expected))
  });

  it("returns 'true' for 'lighthouse'==='lighthouse' ", () => {
    let actual = 'lighthouse';
    let expected = 'lighthouse'
    assert.isTrue(assertEqual(actual,expected))
  });
  
  it("returns 'false' for 89 === 9", () => {
    let actual = 89;
    let expected = 9
    assert.isFalse(assertEqual(actual,expected));
  });
  

});