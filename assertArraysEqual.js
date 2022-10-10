// Import the eqArrays module.
const eqArrays = require('./eqArrays');

// Function to test whether 2 arrays (not nested) are identical
// Recieves 2 arrays and prints result to console (Passed / Failed)
const assertArraysEqual = function(arrA, arrB) {
  // send the arrays to eqArrays, output message depending on result returned
  if (eqArrays(arrA, arrB)) {
    console.log(`💚💚💚 Assertion Passed: ${arrA} === ${arrB}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${arrA} !== ${arrB}`);
  }
};

module.exports = assertArraysEqual;
