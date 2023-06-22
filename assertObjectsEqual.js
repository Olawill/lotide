// Check if objects are equal
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key of Object.keys(object1)) {
      if (!Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
        if (object1[key] !== object2[key]) {
          return false;
        }
      } else {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};

// ASSERTION
const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    const inspect = require('util').inspect;

    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return;
  }
  console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });