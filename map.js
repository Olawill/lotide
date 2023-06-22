// ASSERTION TEST CODES:::
const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
      return true
    }
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

// Words to test with
const words = ["ground", "control", "to", "major", "tom"];

// arr, functionToMap
const map = (arr, functionToMap) => {

  const results = [];
  for (let item of arr) {
    results.push(functionToMap(item));
  }
  return results;
};

const result1 = map(words, word => word[0]);
const result2 = map(words, word => word.length);

console.log(result1);


// TEST CODES
assertArraysEqual(map(words, word => word[0]), result1);
assertArraysEqual(map(words, word => word.length), result2);