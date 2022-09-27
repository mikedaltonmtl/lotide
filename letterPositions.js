// function recieives 2 values (primitive data types)
// Prints 'Passed' to console if values are identical of 'Failed' if not
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

      results[sentence[i]].push(Number(i)); // convert to number (passed as string)

    } else {
      // else add the letter and index to the return object
      results[sentence[i]] = [Number(i)]; // convert to number (passed as string)

    }
  }
  return results; // return result object
};

// test code
console.log('test: he llo ------------------------------');
const result1 = letterPositions('he llo');
assertEqual(eqArrays(result1['h'], [0]), true);
assertEqual(eqArrays(result1['e'], [1]), true);
assertEqual(eqArrays(result1['l'], [3, 4]), true);
assertEqual(eqArrays(result1['o'], [5]), true);

console.log('test: lighthouse in the house -------------');
const result2 = letterPositions('lighthouse in the house');
assertEqual(eqArrays(result2['l'], [0]), true);
assertEqual(eqArrays(result2['i'], [1, 11]), true);
assertEqual(eqArrays(result2['g'], [2]), true);
assertEqual(eqArrays(result2['h'], [3, 5, 15, 18]), true);
assertEqual(eqArrays(result2['t'], [4, 14]), true);
assertEqual(eqArrays(result2['o'], [6, 19]), true);
assertEqual(eqArrays(result2['u'], [7, 20]), true);
assertEqual(eqArrays(result2['s'], [8, 21]), true);
assertEqual(eqArrays(result2['e'], [9, 16, 22]), true);
assertEqual(eqArrays(result2['n'], [12]), true);