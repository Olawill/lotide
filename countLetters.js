// ASSERTION CODE:::
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  // return;
};


// Count all letters in a sentence or string
const countLetters = function(str) {
  const results = {};

  // Remove spaces from the string
  const noSpaces = str.split(' ').join("");

  for (const letter of noSpaces) {
    if (results[letter]) {
      results[letter] += 1;
    }
    else{
      results[letter] = 1;
    }
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));