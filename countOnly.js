/* function to report back how many instances of each string were found in the
 * allItems array of strings
 *
 * 'allItems': an array of strings that will be examined
 * 'itemsToCount': a given object specifying which strings to count
 * 'results': object returned by function containing report of how many
 * instances of each string were found in the 'allItems' array of strings
 */
const countOnly = function(allItems, itemsToCount) {

  const results = {};

  for (const item of allItems) {

    // if the search item marked false, do not add it to the results object
    if (itemsToCount[item]) {

      // if the item already exists in the results object, increase it's count by one
      if (results[item]) {

        results[item] += 1;

      // if the item did not already exist in the results object, create it, with a count of one
      } else {

        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;