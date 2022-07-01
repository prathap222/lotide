const assertArraysEqual = function(actual, expected) {

  var result = eqArrays(actual, expected);

  if (!result) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else  {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const words2 = ["orange", "apple", "grape", "banana", "mango"];
const results2 = map(words2, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results1, ['o','a','g','b','m']);
assertArraysEqual(results2, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['o','a','g','b','m']);






