const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else  {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};
const countLetters = function(letters) {
  const countObj = {};
  
  for (let letter of letters) {
    if (letter === " ") {
      break;
    }
    if (!countObj[letter]) {
      countObj[letter] = 1;
    } else {
      countObj[letter] ++;
    }
  }
  return countObj;
};

const result1 = countLetters("prathap ");
console.log(result1);
assertEqual(result1["p"], 2);
assertEqual(result1["r"], 1);
assertEqual(result1["a"], 2);
assertEqual(result1["t"], 2);
assertEqual(result1["h"], 1);

console.log(countLetters("prathap"));

const result3 =  countLetters("lighthouse in the house");
console.log(result3);
