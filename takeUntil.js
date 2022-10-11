/* Function takeUntil will keep collecting items from a given array
 * until the callback provided returns a truthy value.
 * It will take in two parameters:
 *  1. the array to work with
 *  2. the callback (which Lodash calls "predicate")
 *
 * The callback should only be provided one value: The item in the array.
 *
 * The function will return a "slice of the array with elements taken from
 * the beginning."
 * It should keep going until the callback/predicate returns a truthy value.
 */
const takeUntil = function(array, callback) {
  
  // initialize array of results that will be returned by the function
  const results = [];

  // use for...of so that we can break (can't exit a forEach)
  for (const item of array) {

    if (callback(item)) break;
    
    results.push(item);

  }
  return results;
};

module.exports = takeUntil;
