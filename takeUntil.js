// function to test whether 2 arrays (of primitives) are identical
// recieves 2 arrays and returns true if they are identical
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

// function to test whether 2 arrays (not nested) are identical
// recieves 2 arrays and prints result to console (Passed / Failed)
const assertArraysEqual = function(arrA, arrB) {
  // send the arrays to eqArrays, output message depending on result returned
  if (eqArrays(arrA, arrB)) {
    console.log(`💚💚💚 Assertion Passed: ${arrA} === ${arrB}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${arrA} !== ${arrB}`);
  }
};

/*
 * Function takeUntil will keep collecting items from a given array
 * until the callback provided returns a truthy value.
 *
 * It will take in two parameters:
 *  1. the array to work with
 *  2. the callback (which Lodash calls "predicate")
 *
 * The callback should only be provided one value: The item in the array.
 *
 * The function will return a "slice of the array with elements taken from
 * the beginning."
 * It should keep going until the callback/predicate returns a truthy value.
*/
const takeUntil = function(array, callback) {
  
  // initialize array of results that will be returned by the function
  const results = [];

  // use for...of so that we can break (can't exit a forEach)
  for (const item of array) {

    if (callback(item)) break;
    results.push(item);

  }

  return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);