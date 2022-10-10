/* Function to test whether 2 arrays (which do not contail nested arrays) are identical.
 * Function recieves 2 arrays and returns true if they are identical, false if not.
 */
const eqArrays = function(arrA, arrB) {
  // return false if the arrays are not the same length
  if (arrA.length !== arrB.length) return false;

  // loop through the items, testing the values of each array element
  for (let i in arrA) {

    // if there is a mis-match, return false
    if (arrA[i] !== arrB[i]) return false;
  }

  // if we've made it to the end without returning false, the two arrays must be identical
  return true;
};

module.exports = eqArrays;
