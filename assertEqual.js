// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // FAIL
assertEqual(1, 1);  // PASS
assertEqual("Bootcamp", "Bootcamp");  // PASS
assertEqual(1, 5);  // FAIL
assertEqual("1", 1);  // FAIL
assertEqual(false, null); // FAIL