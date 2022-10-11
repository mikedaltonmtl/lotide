const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#countOnly", () => {

  const allItems = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const itemsToCount = {
    "Jason": true,
    "Karima": true,
    "Fang": true,
    "Agouhanna": false,
  };

  it('returns 1 for (result["Jason"])', () => {
    assert.deepEqual(countOnly(allItems, itemsToCount)["Jason"], 1);
  });

  it('returns undefined for (result["Karima"])', () => {
    assert.deepEqual(countOnly(allItems, itemsToCount)["Karima"], undefined);
  });

  it('returns 2 for (result["Fang"])', () => {
    assert.deepEqual(countOnly(allItems, itemsToCount)["Fang"], 2);
  });

  it('returns undefined for (result["Agouhanna"])', () => {
    assert.deepEqual(countOnly(allItems, itemsToCount)["Agouhanna"], undefined);
  });

});