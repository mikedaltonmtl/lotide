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

module.exports = findKey;