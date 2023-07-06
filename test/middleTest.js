const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

// TEST CASES:
describe('#tail', () => {
  it('Returns [] for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('Returns [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('Returns [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('Returns [4, 5] for [1, 2, 3, 4, 5, 6, 7, 8]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });
});
