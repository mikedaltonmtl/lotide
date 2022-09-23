// function recieives 2 values (not arrays)
// Prints 'Passed' to console if values are identical of 'Failed' if not
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function to return the first item of a given array
const head = function(array) {
  return array[0];
};

// test code
assertEqual(head([5,6,7]), 5); // PASS
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // PASS
assertEqual(head([5]), 5);  // PASS
assertEqual(head([]), 5);   // FAIL