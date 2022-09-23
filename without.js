// function to test whether 2 arrays (not nested) are identical
const eqArrays = function(arrA, arrB) {
  // only start comparing if the arrays are of the same length
  if (arrA.length !== arrB.length) return false;
  // loop through the items, comparing the two arrays
  for (let i in arrA) {
    // if there is a mis-match, return false
    if (arrA[i] !== arrB[i]) return false;
  }
  // if we've made it to the end without returning false, arrays must match
  return true;
};

// function to test whether 2 arrays (not nested) are identical
const assertArraysEqual = function(arrA, arrB) {
  // send the arrays to eqArrays, output message depending on result returned
  if (eqArrays(arrA, arrB)) {
    console.log(`💚💚💚 Assertion Passed: ${arrA} === ${arrB}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${arrA} !== ${arrB}`);
  }
};

// function to remove given items from array
const without = function(source, itemsToRemove) {
  let filtered = [];  // initialize output array
  let keep = true;    // initialize comparison result

  // loop through source array
  for (let s of source) {
    // compare source item with items to remove
    for (let r of itemsToRemove) {
      // if item is on remove list, do not add to output array
      if (s === r) keep = false;
    }
    // if source item should remain, push it to the filtered array
    if (keep) {
      filtered.push(s);
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

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => should PASS
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => should PASS
assertArraysEqual(without(["chocs", "cheese", "carrot"], ["cheese", "carrot"]), ["choc"]); // => should FAIL

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);