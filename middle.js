// get the middle elements from an array
const middle = function(arr) {
  if (arr.length ===  1 || arr.length ===  2) {
    return [];
  }

  if (arr.length ===  3) {
    return [arr[1]];
  }

  if (arr.length > 3 && arr.length % 2 !== 0) {
    return [arr[parseInt((arr.length - 1) / 2)]];
  }

  if (arr.length && arr.length % 2 === 0) {
    return arr.slice(arr.length / 2 - 1, arr.length / 2 + 1);
  }
};


module.exports = middle;

