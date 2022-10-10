// Import the assertEqual module.
const assertEqual = require('../assertEqual');

// Import the head module.
const head = require('../head');

assertEqual(head([5,6,7]), 5); // PASS
assertEqual(head([5,6,7]), 6); // FAIL
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // PASS
assertEqual(head([5]), 5);  // PASS
assertEqual(head([]), 5);   // FAIL
