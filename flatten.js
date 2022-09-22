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

// flatten up to one level only of nested arrays
const flatten = function(packed) {
  let flat = [];  // initialize return array
  // loop through packed array
  for (let i = 0; i < packed.length; i ++) {
    // verify whether item is an array
    if (!Array.isArray(packed[i])) {
      // not an array, add item to return array
      flat.push(packed[i]);
    } else {
      // loop through nested array, adding items to return array
      for (let j = 0; j < packed[i].length; j ++) {
        flat.push(packed[i][j]);
      }
    }
  }
  return flat;
};

// use this!!!!
assertEqualArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // should PASS
assertEqualArrays(flatten([1, 2, [3, 4], 5, [6], [], [7, 8, 9, 10]]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // should PASS
assertEqualArrays(flatten([1, 2, [3, 4], 5, [6]]), [2, 3, 4, 5, 6]); // should FAIL
