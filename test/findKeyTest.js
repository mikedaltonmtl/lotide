const findKey = require('../findKey');
const assert = require('chai').assert;

describe("#findKey", () => {

  const obj = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  it("returns 'noma' for (obj, x => x.stars === 2)", () => {
    assert.deepEqual(findKey(obj, x => x.stars === 2), 'noma');
  });

  it("returns 'Blue Hill' for (obj, x => x.stars === 1)", () => {
    assert.deepEqual(findKey(obj, x => x.stars === 1), 'Blue Hill');
  });

  it("returns 'Akaleri' for (obj, x => x.stars === 3)", () => {
    assert.deepEqual(findKey(obj, x => x.stars === 3), 'Akaleri');
  });

  it("returns undefined for (obj, x => x.stars === 4)", () => {
    assert.deepEqual(findKey(obj, x => x.stars === 4), undefined);
  });

});
