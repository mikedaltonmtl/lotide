// function to test whether 2 arrays (not nested) are identical
const assertEqualArrays = function(arrA, arrB) {
  let passing = true; // initialize result variable
  // only start comparing if the arrays are of the same length
  if (arrA.length !== arrB.length) {
    passing = false;
  } else {
    // loop through the items, comparing the two arrays
    for (let i = 0; i < arrA.length; i++) {
      // if there is a mis-match, change passing to false
      if (arrA[i] !== arrB[i]) {
        passing = false;
        i = arrA.length;  // boost i value to quit loop
      }
    }
  }
  // if we've made it to the end and passing is still true, arrays must match
  if (passing) {
    console.log(`😀😀😀 Assertion Passed: ${arrA} === ${arrB}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${arrA} !== ${arrB}`);
  }
};

// TEST CODE
assertEqualArrays([1, 2, 3], [1, 2, 3]); // => should PASS
assertEqualArrays([1, 2, 3], [3, 2, 1]); // => should FAIL

assertEqualArrays(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertEqualArrays(["1", "2", "3"], ["1", "2", 3]); // => should FAIL
assertEqualArrays(["1", "2", "3"], ["1", "2", "3", "4"]); // => should FAIL
