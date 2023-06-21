// ASSERTION CODE:::
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  // return;
};

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

// Assert that two arrays are a perfect match
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] is a perfect match to [${arr2}]`);
    return;
  }
  console.log(`🔴🔴🔴 Assertion Failed: [${arr1}] is not a perfect match to [${arr2}]`);
};

const letterPositions = function(sentence) {
  const results = {};

  // Remove spaces from the string
  const noSpaces = sentence.split(' ').join("");

  // Code ...
  for (let i = 0; i < noSpaces.length; ++i) {
    if (results[noSpaces[i]]) {
      results[noSpaces[i]].push(i);
    } else {
      results[noSpaces[i]] = [i];
    }
  }
  return results;
}

// console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello"));

const result1 = letterPositions("hello");
assertArraysEqual(result1['h'], [0]);
assertArraysEqual(result1['e'], [1]);
assertArraysEqual(result1['l'], [2, 3]);
assertArraysEqual(result1['o'], [4]);