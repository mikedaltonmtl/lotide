/* function to remove given items (itemsToRemove) from given array (source)
 * return new array of source elements minus the itemsToRemove elements
 */
const without = function(source, itemsToRemove) {

  let filtered = [];  // initialize output array
  let keep = true;    // initialize comparison result

  // loop through source array
  for (let s of source) {

    // compare source item with items to remove
    for (let r of itemsToRemove) {

      // if item is on remove list, do not add to output array
      if (s === r) keep = false;
    }
    // if source item should remain, push it to the filtered array
    if (keep) {

      filtered.push(s);
    } else {

      keep = true; // reset variable
    }
  }
  return filtered; //return the filtered output
};

module.exports = without;