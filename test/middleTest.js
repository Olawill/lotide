const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

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