// ASSERTION CODE:::
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  // return;
};

const findKey = function(object, callback) {
  // Loop through an object
  // Retrun the first key with thuty value based on the callback
  for (let property in object) {
    const element = object[property];

    if (callback(element)) {
      return property;
    }
  }
};

const result1 = findKey({
                  "Blue Hill": { stars: 1 },
                  "Akaleri":   { stars: 3 },
                  "noma":      { stars: 2 },
                  "elBulli":   { stars: 3 },
                  "Ora":       { stars: 2 },
                  "Akelarre":  { stars: 3 }
                }, x => x.stars === 5);

const result2 = findKey({
                  "Blue Hill": { stars: 1 },
                  "Akaleri":   { stars: 3 },
                  "noma":      { stars: 2 },
                  "elBulli":   { stars: 3 },
                  "Ora":       { stars: 2 },
                  "Akelarre":  { stars: 3 }
                }, x => x.stars === 2);

assertEqual(result1, undefined);
assertEqual(result2, "noma");