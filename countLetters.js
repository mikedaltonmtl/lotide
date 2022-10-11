/* function receives a string as an argument
 * returns an object showing how many instances of each letter exist in the string
 */
const countLetters = function(string) {

  const results = {}; // initialize output object
  const cleanStr = string.split(' ').join(''); // remove any spaces from given string

  // loop through the given string
  for (const char of cleanStr) {

    // if the character is already in the output object, increase the quantity
    if (results[char]) {
      results[char] += 1;
    
    // the character is not already in results, create it with a count of one
    } else {
      results[char] = 1;
    }
  }
  return results; // return output object
};

module.exports = countLetters;