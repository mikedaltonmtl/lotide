/* map function will take in two arguments:
 *  1. An array to map
 *  2. A callback function
 * function will return a new array based on results of the callback function
 */
const map = function(array, callback) {
  const results = []; // initialize results array

  // loop through each array item using forEach
  // push each modified item to the results array

  array.forEach(item => results.push(callback(item)));

  return results;
};

module.exports = map;