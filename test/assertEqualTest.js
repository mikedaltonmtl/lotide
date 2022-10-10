// Import the assertEqual module.
const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp"); // FAIL
assertEqual(1, 1);  // PASS
assertEqual("Bootcamp", "Bootcamp");  // PASS
assertEqual(1, 5);  // FAIL
assertEqual("1", 1);  // FAIL
assertEqual(false, null); // FAIL
