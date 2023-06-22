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
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] is a perfect match to [${arr2}]`);
    return;
  }
  console.log(`🔴🔴🔴 Assertion Failed: [${arr1}] is not a perfect match to [${arr2}]`);
};

// get the middle elements from an array
const middle = function(arr) {
  if (arr.length ===  1 || arr.length ===  2) {
    console.log([]);
    return;
  }

  if (arr.length ===  3) {
    console.log([arr[1]]);
    return;
  }

  if (arr.length % 2 !== 0) {
    console.log([arr[parseInt((arr.length + 1) / 2)]]);
    return;
  }

  if (arr.length % 2 === 0) {
    console.log(arr.slice(arr.length / 2 - 1, arr.length / 2 + 1));
    return;
  }
};

// TEST CASES:
const arrs = [
  [1], [1, 2], [1, 2, 3],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4], [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6, 7, 8]
];

// Test for each array in array if the original is modified
// after the middle operation
for (let arr of arrs) {
  middle(arr);
  assertArraysEqual(arr.slice(), arr);
}


