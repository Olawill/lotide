const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  const inspect = require('util').inspect;
  if (eqArrays(arr1, arr2)) {

    console.log(`✅✅✅Assertion Passed: ${inspect(arr1)} is a perfect match to ${inspect(arr2)}`);
    return;
  }
  console.log(`🔴🔴🔴Assertion Failed: ${inspect(arr1)} is not a perfect match to ${inspect(arr2)}`);
};

module.exports = assertArraysEqual;

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);