const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#findKeyByValue", () => {

  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it("returns 'drama' for (bestTVShowsByGenre, 'The Wire')", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });

  it("returns undefined for (bestTVShowsByGenre, 'That 70's Show')", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined);
  });

});
