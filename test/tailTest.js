const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("should check tail functionality when array of string is passed", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.equal(result.length, 2); // ensure we get back two elements
    assert.equal(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
    assert.equal(result[1], "Labs"); // ensure second element is "Labs"

  });

  it("should check tail functionality when array of numbers is passed" , () => {
    const result2 = tail([5,6,7,8,9,10]);
    assert.equal(result2.length,5);
    assert.equal(result2[3],9);
    assert.equal(result2[4],10);
      });
  
  it("tail functionality should not modify original array ", () => {
        
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); // no need to capture the return value since we are not checking it
    assert.equal(words.length, 3); // original array should still have 3 elements!

  });
  

});