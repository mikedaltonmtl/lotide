/* flatten up to one level only of nested arrays
 * recieves array that may be nested (one level only)
 * returns array containing all elements, but no longer nested
 */
const flatten = function(packed) {

  let flat = [];  // initialize return array

  for (let i of packed) { // loop through given array
    
    if (!Array.isArray(i)) { // verify whether item is an array
      
      flat.push(i); // if not an array, add item to return array

    } else { // item is an array -> loop through nested array
      
      for (let j of i) {
        
        flat.push(j); // add nested array items to return array
      }
    }
  }
  return flat;
};

module.exports = flatten;