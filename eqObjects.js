// function recieives 2 values (primitive data types)
// Prints 'Passed' to console if values are identical of 'Failed' if not
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
// otherwise returns false
// object1, object 2: objects received for comparison
const eqObjects = function(object1, object2) {

  // test for number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  // loop through object1, testing for matching keys in object2
  for (const key in object1) {

    if (!(key in object2)) return false; // keys don't match

    // if values are arrays, use function eqArrays to compare them
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

      return eqArrays(object1[key], object2[key]);
    }

    // if primitive data type, test values
    if (object1[key] !== object2[key]) return false;
  }

  return true;  // passed all tests, return true
};

// test code
console.log('ab, ba ----------------');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

console.log('ab, abc ---------------');

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

console.log('cd, dc ----------------');

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

console.log('cd, cd2 ---------------');

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);