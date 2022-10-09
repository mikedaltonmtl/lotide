/* function recieives 2 primitive values
 * Prints 'Passed' if values are identical of 'Failed' if not
 */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* function recieves 2 arrays and returns true if they are identical, false if not
 */
const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) return false;

  for (const index in array1) {
    
    if (Array.isArray(array1[index])) { // recursive case

      if (eqArrays(array1[index], array2[index])) {

        // if the nested array passes tests,
        // jump to next index or function will return false
        // when it tries to compare two arrays
        continue; 
      };
    }

    if (array1[index] !== array2[index]) { // base case

      return false;
    }
  }
  return true;
};
// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays([3, 2, 1], [3, 2, 1, 0]), false);
assertEqual(eqArrays([3, 2, 1, 0], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

// console.log("recursion tests ----------------------")
assertEqual(eqArrays([1, [2, 3], [4]], [1, [2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
assertEqual(eqArrays([[2, 3], [4, [5, 6]]], [[2, 3], 4, [5, 6]]), false);
assertEqual(eqArrays([[2, 3], [4, [5, 6]]], [[2, 3], [4, [5, "6"]]]), false);
