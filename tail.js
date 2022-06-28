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

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const result2 = tail([5,6,7,8,9,10]);
assertEqual(result2.length,5);
assertEqual(result2[3],9);
assertEqual(result2[4],10);
