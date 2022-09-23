// function to test whether 2 arrays (not nested) are identical
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

// flatten up to one level only of nested arrays
const flatten = function(packed) {
  let flat = [];  // initialize return array
  // loop through packed array
  for (let i of packed) {
    // verify whether item is an array
    if (!Array.isArray(i)) {
      // not an array, add item to return array
      flat.push(i);
    } else {
      // loop through nested array, adding items to return array
      for (let j of i) {
        flat.push(j);
      }
    }
  }
  return flat;
};

// test code
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // should PASS
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6], [], [7, 8, 9, 10]]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // should PASS
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [0, 2, 3, 4, 5, 6]); // should FAIL