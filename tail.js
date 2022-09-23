const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function to return tail of a given array
const tail = function(array) {
  return array.slice(1);
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: ...
const result2 = tail(["A", "B", "C", "D", "E"]);
assertEqual(result2.length, 4); // ensure we get back two elements
assertEqual(result2[0], "B"); // ensure first element is "B"
assertEqual(result2[1], "C"); // ensure second element is "C"
assertEqual(result2[2], "D"); // ensure third element is "D"
assertEqual(result2[3], "E"); // ensure fourth element is "E"
assertEqual(result2[3], "e"); // test failure on fourth element
