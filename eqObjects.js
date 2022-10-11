const eqArrays = require('./eqArrays');

/* function returns true if both given objects have identical keys with identical values
 * otherwise returns false: object1, object 2: objects received for comparison
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

module.exports = eqObjects;