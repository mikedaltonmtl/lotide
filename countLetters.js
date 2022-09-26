// function recieives 2 values (primitive data types)
// Prints 'Passed' to console if values are identical of 'Failed' if not
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function receives a string as an argument
// returns object showing how many instances of each letter in the string there are
const countLetters = function(string) {

  const results = {}; // initialize output object

  // loop through the given string
  for (const char of string) {
    // if the character is already in the output object, increase the quantity
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }

  return results; // return output object
};