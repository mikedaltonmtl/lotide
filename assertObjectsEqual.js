// function to test whether 2 arrays (not nested) are identical
// recieves 2 arrays and returns true if they are identical
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

// function returns true if both given objects have identical keys with identical values
// otherwise returns false --- object1, object 2: objects received for comparison
const eqObjects = function(object1, object2) {
  // test for number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  // loop through object1, testing for matching keys in object2
  for (const key in object1) {
    if (!(key in object2)) return false; // keys don't match
    // if values are arrays, use function eqArrays to compare them
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    // if primitive data type, test values
    } else {
      if (object1[key] !== object2[key]) return false;
    }
  }
  return true;  // passed all tests, return true
};

// function receives two objects, 'actual' and 'expected'
// prints assertion 'passed' (if identical) or 'failed' (if not) to the console
const assertObjectsEqual = function(actual, expected) {

  // add the util library to use it's 'inspect' function
  const inspect = require('util').inspect;

  // send the objects to eqObjects, print message depending on result returned
  if (eqObjects(actual, expected)) {
    console.log(`💚💚💚 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // should pass

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // should fail

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // should pass

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);  // should fail