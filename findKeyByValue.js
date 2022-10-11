/* function findKeyByValue takes in an object and a value.
 * it will scan the object and return the first key which contains the given value.
 * If no key with that given value is found, then it will return undefined.
 * object: object to scan
 * value: value to be found in object
 * key: return value of first key found that has a value equal to the given value
*/
const findKeyByValue = function(object, value) {

  // loop through object keys
  for (const key in object) {

    // if the value of the key matches search value, return the key
    if (object[key] === value) return key;

  }

  return undefined; // the loop ended wihout a match
};

module.exports = findKeyByValue;