const head = require('../head');
const assert = require('chai').assert;

describe("#head", () => {
  it("should return 0th index value when array of numbers is passed", () => {
    let input = [5,6,7];
    let expected = 5;
    assert.equal(head(input),expected)
  });

  it("should return 0th index value when array of strings is passed" , () => {
    let input = ['Hello', 'Lighthouse', 'Labs'];
    let expected = 'Hello';
    assert.equal(head(input),expected)
  });
  
  it("should return undefined when an empty array is passed", () => {
    let input = [];
    assert.isUndefined(head(input))
  });
  

});