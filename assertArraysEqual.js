// const eqArrays = function(arrayA, arrayB) {
//   if (arrayA.length !== arrayB.length) {
//      return false;
//   }

//   for (let i=0; i<= arrayA.length; i++) {
//     if (arrayA[i] !== arrayB[i]) {
//       return false;
//     }
//   }
//   return true ;
// };

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {

  var result = eqArrays(actual, expected);

  if (!result) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return false;
  } else  {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  }
};

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [3, 2, 1]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
// assertArraysEqual([1, 2, 3], [1, 2, "3"]);

module.exports = assertArraysEqual;