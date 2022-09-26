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
  const cleanStr = string.split(' ').join(''); // remove any spaces from given string

  // loop through the given string
  for (const char of cleanStr) {
    // if the character is already in the output object, increase the quantity
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }

  return results; // return output object
};

// test code
console.log('test: LHL -----------------------------------------');
const result1 = countLetters("LHL");
assertEqual(result1["L"], 2);
assertEqual(result1["H"], 1);

console.log('test: lighthouse in the house ---------------------');
const result2 = countLetters("lighthouse in the house");
assertEqual(result2["l"], 1);
assertEqual(result2["i"], 2);
assertEqual(result2["g"], 1);
assertEqual(result2["h"], 4);
assertEqual(result2["t"], 2);
assertEqual(result2["o"], 2);
assertEqual(result2["u"], 2);
assertEqual(result2["s"], 2);
assertEqual(result2["e"], 3);
assertEqual(result2["n"], 1);