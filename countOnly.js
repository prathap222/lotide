const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {

    if (itemsToCount[item]) {
      if (!results[item]) {
        results[item] = 1;
      } else {
        results[item]++;
      }
    }

  }

  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
  "Jason"
];

const firstNameObj = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }

const result1 = countOnly(firstNames, firstNameObj);
console.log(result1);