const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    let perfectMatch = true;
    for (let i = 0; i < arr1.length; i++) {
      if (perfectMatch) {
        perfectMatch = arr1[i] === arr2[i];
      }
    }
    return perfectMatch;
  }
  return false;
};

const assertArraysEqual = function(arr1, arr2) {
  const inspect = require('util').inspect;
  if (eqArrays(arr1, arr2)) {

    console.log(`✅✅✅Assertion Passed: ${inspect(arr1)} is a perfect match to ${inspect(arr2)}`);
    return;
  }
  console.log(`🔴🔴🔴Assertion Failed: ${inspect(arr1)} is not a perfect match to ${inspect(arr2)}`);
};

const without = function(source, itemsToRemove) {
  // Array that would hold the final elements
  const result = [];
  source.forEach((item) => {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  })
  return result;
};

console.log(without([1, 2, 3], [1]) )// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));

const words = ["1", "2", "3"];
without(words, [1, 2, "3"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, [1, "2", "3"]);