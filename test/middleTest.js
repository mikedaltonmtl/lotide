// Import the assertArraysEqual module.
const assertArraysEqual = require('../assertArraysEqual');

// Import thr middle module.
const middle = require('../middle');


assertArraysEqual(middle([1]), []); // should PASS
assertArraysEqual(middle([1, 2]), []); // should PASS
assertArraysEqual(middle([1, 2, 3]), [2]); // should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [4]); // should FAIL
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3]); // should FAIL