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

/* function returns true if both given objects have identical keys with identical values
 * otherwise returns false:  object1, object 2: objects received for comparison
 */
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

// helper function that 'flattens' nested objects recursively
const flattenObject = function(object) {

  for (const element in object) {
    // test if value of element is an object (but not an array)
    if (!Array.isArray(object[element]) && typeof object[element] === "object") {
      // 'flatten' the properties into the original object
      for (const key in object[element]) {
        // create new key / values in the original object from the element object
        object[key] = object[element][key];
      }
    // delete the key of the original object that was holding the object element
    delete object[element];

    // recall this function for any other instances of nested objects
    flattenObject(object);
    }
  }
  return object;
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

console.log('recursion1 ------------');
const obj01 = { a: { z: 1 }, b: 2 };
const obj02 = { a: { z: 1 }, b: 2 };
assertEqual(eqObjects(obj01, obj02), true);

console.log('recursion2 ------------');
const obj03 = { a: { y: 0, z: 1 }, b: 2 };
const obj04 = { a: { z: 1 }, b: 2 };
assertEqual(eqObjects(obj03, obj04), false);

console.log('recursion3 ------------');
const obj05 = { a: { y: 0, z: 1 }, b: 2 };
const obj06 = { a: 1, b: 2 };
assertEqual(eqObjects(obj05, obj06), false);

console.log('recursion4 ------------');
const obj07 = { a: { y: 0, z: 1 }, b: 2 };
const obj08 = { a: { y: 0, z: 1 }, b: 2 };
assertEqual(eqObjects(obj07, obj08), true);

console.log('recursion5 ------------');
const obj09 = { a: { y: 0, z: { x: 3 } }, b: 2 };
const obj10 = { b: 2, a: { y: 0, z: { x: 3 } } };
assertEqual(eqObjects(obj09, obj10), true);

console.log('recursion6 ------------');
const obj11 = { a: { y: 0, z: { x: 3 } }, b: 2 };
const obj12 = { a: { y: 0, z: { x: 4 } }, b: 2 };
assertEqual(eqObjects(obj11, obj12), false);

console.log('recursion7 ------------');
const obj13 = { a: { y: 0, z: { x: 3 } }, b: 2 };
const obj14 = { a: { y: 0, z: { x: 4, w:1 } }, b: 2 };
assertEqual(eqObjects(obj13, obj14), false);

console.log('recursion8 ------------');
const obj15 = { m: [1, 2], n: "x", a: { y: 0, z: { x: 4, w:1 } }, b: 2 };
const obj16 = { b: 2, a: { y: 0, z: { x: 4, w:1 } }, m: [1, 2], n: "x" };
assertEqual(eqObjects(obj15, obj16), false);
