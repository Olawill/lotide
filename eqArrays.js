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

module.exports = eqArrays;