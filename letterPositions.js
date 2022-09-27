// function to test whether 2 arrays (not nested) are identical
// recieves 2 arrays and returns true if they are identical
const eqArrays = function(arrA, arrB) {
  // only start comparing if the arrays are of the same length
  if (arrA.length !== arrB.length) return false;
  // loop through the items, comparing the two arrays
  for (let i in arrA) {
    // if there is a mis-match, return false
    if (arrA[i] !== arrB[i]) return false;
  }
  // if we've made it to the end without returning false, arrays must match
  return true;
};

// function to test whether 2 arrays (not nested) are identical
// recieves 2 arrays and prints result to console (Passed / Failed)
const assertArraysEqual = function(arrA, arrB) {
  // send the arrays to eqArrays, output message depending on result returned
  if (eqArrays(arrA, arrB)) {
    console.log(`💚💚💚 Assertion Passed: ${arrA} === ${arrB}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${arrA} !== ${arrB}`);
  }
};

/* function that returns all the indices (zero-based positions) in the given string
 * where each character is found.
 *
 * sentence: string to be examined
 * results: object returned by function
 *  key = letter - value = array of indexes where letter is found in 'sentence'
*/
const letterPositions = function(sentence) {
  const results = {}; // initialize return object

  // loop through string using 'for...in' as we need the indexes
  for (const i in sentence) {

    if (sentence[i] === ' ') continue;  // ignore spaces

    // if the letter already exists in the return object, add the index
    if (results[sentence[i]]) {

      results[sentence[i]].push(Number(i)); // convert i to number (passed as string)

    } else {
      // else add the letter and index to the return object
      results[sentence[i]] = [Number(i)]; // convert i to number (passed as string)
    }
  }
  return results; // return result object
};

// test code
console.log('test: he llo ------------------------------');
assertArraysEqual(letterPositions('he llo')['h'], [0]);
assertArraysEqual(letterPositions('he llo')['e'], [1]);
assertArraysEqual(letterPositions('he llo')['l'], [3, 4]);
assertArraysEqual(letterPositions('he llo')['o'], [5]);

console.log('test: lighthouse in the house -------------');
assertArraysEqual(letterPositions('lighthouse in the house')['l'], [0]);
assertArraysEqual(letterPositions('lighthouse in the house')['i'], [1, 11]);
assertArraysEqual(letterPositions('lighthouse in the house')['g'], [2]);
assertArraysEqual(letterPositions('lighthouse in the house')['h'], [3, 5, 15, 18]);
assertArraysEqual(letterPositions('lighthouse in the house')['t'], [4, 14]);
assertArraysEqual(letterPositions('lighthouse in the house')['o'], [6, 19]);
assertArraysEqual(letterPositions('lighthouse in the house')['u'], [7, 20]);
assertArraysEqual(letterPositions('lighthouse in the house')['s'], [8, 21]);
assertArraysEqual(letterPositions('lighthouse in the house')['e'], [9, 16, 22]);
assertArraysEqual(letterPositions('lighthouse in the house')['n'], [12]);