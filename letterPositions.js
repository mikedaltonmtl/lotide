/* function returns all the indices (zero-based positions) in a given string
 * where each character is found.
 *
 * sentence: string to be examined
 * results: object returned by function { letter: [indexe(s) of 'sentence' where letter is found]
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

module.exports = letterPositions;