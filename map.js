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

// map function will take in two arguments:
//  1. An array to map
//  2. A callback function
// function will return a new array based on results of the callback function

const map = function(array, callback) {
  const results = []; // initialize results array

  // loop through array elements
  for (let item of array) {

    // affect the element using the callback function and add to results array
    results.push(callback(item));
  }

  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const results2 = map(words, word => word += "ly");
assertArraysEqual(results2, ["groundly", "controlly", "toly", "majorly", "tomly"]);

const results3 = map(words, word => word[0] + word[word.length - 1]);
assertArraysEqual(results3, ["gd", "cl", "to", "mr", "tm"]);

const results4 = map(words, word => word.length);
assertArraysEqual(results4, [6, 7, 2, 5, 3]);
