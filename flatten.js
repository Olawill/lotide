const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

// Assert that two arrays are a perfect match
const assertArraysEqual = function(arr1, arr2) {
  const inspect = require('util').inspect;
  if (eqArrays(arr1, arr2)) {

    console.log(`✅✅✅Assertion Passed: ${inspect(arr1)} is a perfect match to ${inspect(arr2)}`);
    return;
  }
  console.log(`🔴🔴🔴Assertion Failed: ${inspect(arr1)} is not a perfect match to ${inspect(arr2)}`);
};

const flatten = function(arr) {
  let flattenArr = [];
  for (const element of arr) {
    // If the current item in our array is an Array...
    if (!Array.isArray(element)) {
      flattenArr.push(element);
    }
    if (Array.isArray(element)) {
      for (const e of element) {
        flattenArr.push(e);
      }
    }
  }
  return flattenArr;
};


const testArr = [1, 2, [3, 4], 5, [6]];
console.log(flatten(testArr));
console.log(testArr);

assertArraysEqual(flatten(testArr), [1, 2, [3, 4], 5, [6]]);
