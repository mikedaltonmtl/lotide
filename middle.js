// RULES:
// 1. For arrays with one or two elements, there is no middle. Return an empty array.
// 2. For arrays with odd number of elements, an array containing
//    a single middle element should be returned.
// 3. For arrays with an even number of elements, an array containing
//    the two elements in the middle should be returned

/* Function to take in an array and return the middle-most element(s) of the given array,
 * as per the above rules
 */
const middle = function(array) {
  // output is dependent on the length of array
  switch (true) {

  case array.length < 3:
    return [];

  case array.length % 2 !== 0:
    return [array[Math.floor(array.length / 2)]];

  default:
    return array.slice(array.length / 2 - 1, array.length / 2 + 1);
  }
};

module.exports = middle;