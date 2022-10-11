const eqArraysRefactor = require('./eqArraysRefactor');

/* function returns true if both given objects have identical keys with identical values
 * otherwise returns false:  object1, object 2: objects received for comparison
 */
const eqObjectsRefactor = function(object1, object2) {

  // test for number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  // 'flatten' any nested objects
  object1 = flattenObject(object1);
  object2 = flattenObject(object2);

  // loop through object1, testing for matching keys in object2
  for (const key in object1) {

    if (!(key in object2)) return false; // keys don't match

    // if values are arrays, use function eqArrays to compare them
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

      return eqArraysRefactor(object1[key], object2[key]);

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

module.exports = eqObjectsRefactor;