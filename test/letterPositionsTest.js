const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {

  const str1 = 'he llo';
  const str2 = 'lighthouse in the house';

  it("returns [0] for ('he llo')['h']", () => {
    assert.deepEqual(letterPositions(str1)['h'], [0]);
  });

  it("returns [1] for ('he llo')['e']", () => {
    assert.deepEqual(letterPositions(str1)['e'], [1]);
  });

  it("returns [3, 4] for ('he llo')['l']", () => {
    assert.deepEqual(letterPositions(str1)['l'], [3, 4]);
  });

  it("returns [5] for ('he llo')['o']", () => {
    assert.deepEqual(letterPositions(str1)['o'], [5]);
  });

  it("returns [0] for ('lighthouse in the house')['l']", () => {
    assert.deepEqual(letterPositions(str2)['l'], [0]);
  });

  it("returns [1, 11] for ('lighthouse in the house')['i']", () => {
    assert.deepEqual(letterPositions(str2)['i'], [1, 11]);
  });

  it("returns [2] for ('lighthouse in the house')['g']", () => {
    assert.deepEqual(letterPositions(str2)['g'], [2]);
  });

  it("returns [3, 5, 15, 18] for ('lighthouse in the house')['h']", () => {
    assert.deepEqual(letterPositions(str2)['h'], [3, 5, 15, 18]);
  });

  it("returns [4, 14] for ('lighthouse in the house')['t']", () => {
    assert.deepEqual(letterPositions(str2)['t'], [4, 14]);
  });

  it("returns [6, 19] for ('lighthouse in the house')['o']", () => {
    assert.deepEqual(letterPositions(str2)['o'], [6, 19]);
  });

  it("returns [7, 20] for ('lighthouse in the house')['u']", () => {
    assert.deepEqual(letterPositions(str2)['u'], [7, 20]);
  });

  it("returns [8, 21] for ('lighthouse in the house')['s']", () => {
    assert.deepEqual(letterPositions(str2)['s'], [8, 21]);
  });

  it("returns [9, 16, 22] for ('lighthouse in the house')['e']", () => {
    assert.deepEqual(letterPositions(str2)['e'], [9, 16, 22]);
  });

  it("returns [12] for ('lighthouse in the house')['n']", () => {
    assert.deepEqual(letterPositions(str2)['n'], [12]);
  });

});
