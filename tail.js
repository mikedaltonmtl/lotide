/* Function to return 'tail' of a given array.
 * Receives array, returns copy of array excluding the first element.
 * If the given array is empty, or only contains one element, an empty array is returned.
 */
const tail = function(array) {
  // return an empty array if given array is empty or only has 1 element
  return array.length < 2 ? [] : array.slice(1);
};

module.exports = tail;
