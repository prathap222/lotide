const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else  {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function(arr) {
  if (arr === [] || arr.length === 1) {
    return [];
  } else {
    return arr.slice(1);
  }
};

// console.log(tail([5,6,7]));
// console.log(tail(["Hello", "Lighthouse", "Labs"]));
// console.log(tail(["Hell"]));
// console.log(tail([]));

// const res1 = tail(["Hello", "Lighthouse", "Labs"]);
// const expected =  ["Lighthouse", "Labs"];

// assertEqual(res1.toString(), expected.toString());

// Test Case 1
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2
const result2 = tail([5,6,7,8,9,10]);
assertEqual(result2.length,5);
assertEqual(result2[3],9);
assertEqual(result2[4],10);


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
