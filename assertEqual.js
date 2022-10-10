/* Function receives 2 values (primitive data types).
 * Prints the result of the assertion to the console:
 * 'Assertion Passed' if the values are identical of 'Assertion Failed' if not.
 */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;