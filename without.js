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
// assertEqualArrays([1, 2, 3], [1, 2, 3]); // => should PASS
// assertEqualArrays([1, 2, 3], [3, 2, 1]); // => should FAIL

// assertEqualArrays(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
// assertEqualArrays(["1", "2", "3"], ["1", "2", 3]); // => should FAIL
// assertEqualArrays(["1", "2", "3"], ["1", "2", "3", "4"]); // => should FAIL


// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function to test whether 2 arrays (not nested) are identical
const eqArrays = function(arrA, arrB) {
  // only start comparing if the arrays are of the same length
  if (arrA.length !== arrB.length) return false;
  // loop through the items, comparing the two arrays
  for (let i = 0; i < arrA.length; i++) {
    // if there is a mis-match, return false
    if (arrA[i] !== arrB[i]) return false;
  }
  // if we've made it to the end without returning false, arrays must match
  return true;
};

// TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL

// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

const without = function(source, itemsToRemove) {
  let filtered = [];  // initialize output array
  let keep = true;    // initialize comparison result
  // loop through source array
  for (let i = 0; i < source.length; i++) {
    // compare source item with items to remove
    for (let j = 0; j < itemsToRemove.length; j ++) {
      if (source[i] === itemsToRemove[j]) {
        keep = false;             // item is on remove list, do not add
        j = itemsToRemove.length; // boost j to quit loop
      }
    }
    // if source item should remain, push it to the filtered array
    if (keep) {
      filtered.push(source[i]);
    } else {
      keep = true;    // reset variable
    }
  }
  //return the filtered output
  return filtered;
};

// test code
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));  // => ["1", "2"]

assertEqualArrays(without([1, 2, 3], [1]), [2, 3]); // => should PASS
assertEqualArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => should PASS
assertEqualArrays(without(["chocs", "cheese", "carrot"], ["cheese", "carrot"]), ["chocs"]); // => should PASS

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertEqualArrays(words, ["hello", "world", "lighthouse"]);
