// const assertEqual = function(actual, expected) {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   } else  {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   }
// };
const assertEqual = require('./assertEqual');

const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
     return false;
  }

  for (let i=0; i<= arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true ;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true);

module.exports = eqArrays;