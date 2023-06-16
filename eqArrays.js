const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  // return;
};

const tail = function(arr) {
  return arr.slice(1);
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);