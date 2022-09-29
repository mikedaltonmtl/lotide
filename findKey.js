// function recieives 2 values (primitive data types)
// Prints 'Passed' to console if values are identical of 'Failed' if not
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* function findKey takes in an object and a callback.
 * It scans the object and returns the first key for which the callback
 * returns a truthy value. If no key is found, then it will return undefined.
 */
const findKey = function(object, callback) {

  // loop through the keys of the object
  for (const key of Object.keys(object)) {

    // test the key with the callback function
    if (callback(object[key])) {

      // if match is found, return the key
      return key;
    }
  }

  return; // no matching key was found, return undefined
};

// test code --------------
const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(obj, x => x.stars === 2), "noma");
assertEqual(findKey(obj, x => x.stars === 1), "Blue Hill");
assertEqual(findKey(obj, x => x.stars === 3), "Akaleri");
assertEqual(findKey(obj, x => x.stars === 4), undefined);
