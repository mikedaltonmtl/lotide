// Import the eqArrays module.
const assertArraysEqual = require('../assertArraysEqual');

// Import the eqArrays module.
const eqArrays = require('../eqArrays');


assertArraysEqual(eqArrays([], []), true);

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);
