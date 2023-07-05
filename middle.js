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

module.exports = middle;

