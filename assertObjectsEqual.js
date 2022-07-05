// const eqArrays = function(arrayA, arrayB) {
//   if (arrayA.length !== arrayB.length) {
//     return false;
//   }

//   for (let i = 0; i <= arrayA.length; i++) {
//     if (arrayA[i] !== arrayB[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const eqObjects = function(object1, object2) {
//   const arr1 = Object.keys(object1);
//   const arr2 = Object.keys(object2);

//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let key of arr1) {
//     if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
//       return (eqArrays(object1[key], object2[key]));
//     } else if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

const eqArrays =  require('./eqArrays');
const eqObjects =  require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  
};

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2);


module.exports = assertObjectsEqual;