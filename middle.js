const eqArrays = function(arrA, arrB) {
  // only start comparing if the arrays are of the same length
  if (arrA.length !== arrB.length) return false;
  // loop through the items, comparing the two arrays
  for (let i in arrA) {
    // if there is a mis-match, return false
    if (arrA[i] !== arrB[i]) return false;
  }
  // if we've made it to the end without returning false, arrays must match
  return true;
};

const assertArraysEqual = function(arrA, arrB) {
  // send the arrays to eqArrays, output message depending on result returned
  if (eqArrays(arrA, arrB)) {
    console.log(`💚💚💚 Assertion Passed: ${arrA} === ${arrB}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${arrA} !== ${arrB}`);
  }
};

// RULES:
// 1. For arrays with one or two elements, there is no middle. Return an empty array.
// 2. For arrays with odd number of elements, an array containing
//    a single middle element should be returned.
// 3. For arrays with an even number of elements, an array containing
//    the two elements in the middle should be returned

// function to take in array and return the middle-most element(s) of the given array
const middle = function(array) {
  // output will depend on the length of array
  switch (true) {
  case array.length < 3:
    return [];
  case array.length % 2 !== 0:
    return [array[Math.floor(array.length / 2)]];
  default:
    return array.slice(array.length / 2 - 1, array.length / 2 + 1);
  }
};

assertArraysEqual(middle([1]), []); // should PASS
assertArraysEqual(middle([1, 2]), []); // should PASS
assertArraysEqual(middle([1, 2, 3]), [2]); // should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [4]); // should FAIL
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3]); // should FAIL