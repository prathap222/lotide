const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("should check tail functionality when array of string is passed", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2); // ensure we get back two elements
    assert.deepEqual(result, ["Lighthouse", "Labs"])
    assert.strictEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
    assert.strictEqual(result[1], "Labs"); // ensure second element is "Labs"

  });

  it("should check tail functionality when array of numbers is passed" , () => {
    const result2 = tail([5,6,7,8,9,10]);
    assert.strictEqual(result2.length,5);
    assert.deepEqual(result2, [6,7,8,9,10]);
    assert.strictEqual(result2[3],9);
    assert.strictEqual(result2[4],10);
      });
  
  it("tail functionality should not modify original array ", () => {
        
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); // no need to capture the return value since we are not checking it
    assert.strictEqual(words.length, 3); // original array should still have 3 elements!

  });
  

});