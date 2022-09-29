/* 
 * Function takeUntil will keep collecting items from a given array 
 * until the callback provided returns a truthy value.
 *
 * It will take in two parameters:
 *  1. the array to work with
 *  2. the callback (which Lodash calls "predicate")
 * 
 * The callback should only be provided one value: The item in the array.
 * 
 * The function will return a "slice of the array with elements taken from
 * the beginning."
 * It should keep going until the callback/predicate returns a truthy value.
*/
const takeUntil = function(array, callback) {
  
  

};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]