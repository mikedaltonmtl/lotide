/* function recieves 2 arrays (may be nested) and returns true if they are identical,
 * false if not
 */
const eqArraysRefactor = function(array1, array2) {

  if (array1.length !== array2.length) return false;

  for (const index in array1) {
    
    if (Array.isArray(array1[index])) { // recursive case

      if (eqArraysRefactor(array1[index], array2[index])) {

        /* if the nested array passes tests, jump to the next index,
         * or the function will return false when it tries to compare two arrays */
        continue;
      }
    }

    if (array1[index] !== array2[index]) { // base case

      return false;
    }
  }
  return true;
};

module.exports = eqArraysRefactor;