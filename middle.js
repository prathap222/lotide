// const assertArraysEqual = function (actual, expected) {

//   var result = eqArrays(actual, expected);

//   if (!result) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   } else {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   }
// };

// const eqArrays = function (arrayA, arrayB) {
//   if (arrayA.length !== arrayB.length) {
//     return false;
//   }

//   for (let i = 0; i <= arrayA.length; i++) {
//     if (arrayA[i] !== arrayB[i]) {
//       return false;
//     }
//   }
//   return true;
// }

const assertArraysEqual = require('./assertArraysEqual');

const middle = function (array) {

  let arrayLength = array.length;
  let middleValue = [];
  
  var middleIndex = (Math.floor(arrayLength / 2));
  // console.log(`${array} ==> Length: ${arrayLength} ==> Middle Index: ${middleIndex}`);

  if (arrayLength === 0 || arrayLength === 1 || arrayLength === 2) {
    return middleValue; 
  } 

  if (arrayLength % 2 !== 0) {
    middleValue.push(array[middleIndex])
  } else if (arrayLength % 2 === 0){
    middleValue.push(array[middleIndex - 1]);
    middleValue.push(array[middleIndex]);
  }
  return middleValue;
};

// console.log(middle([]));
// console.log(middle([1,2]));  
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

module.exports = middle;
