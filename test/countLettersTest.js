const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {

  const string1 = "LHL";
  const string2 = "lighthouse in the house";

  it(`returns 2 for countLetters(${string1})["L"]`, () => {
    assert.deepEqual(countLetters(string1)["L"], 2);
  });

  it(`returns 1 for countLetters(${string1})["H"]`, () => {
    assert.deepEqual(countLetters(string1)["H"], 1);
  });

  it(`returns 1 for countLetters(${string2})["l"]`, () => {
    assert.deepEqual(countLetters(string2)["l"], 1);
  });

  it(`returns 2 for countLetters(${string2})["i"]`, () => {
    assert.deepEqual(countLetters(string2)["i"], 2);
  });

  it(`returns 1 for countLetters(${string2})["g"]`, () => {
    assert.deepEqual(countLetters(string2)["g"], 1);
  });

  it(`returns 4 for countLetters(${string2})["h"]`, () => {
    assert.deepEqual(countLetters(string2)["h"], 4);
  });

  it(`returns 2 for countLetters(${string2})["t"]`, () => {
    assert.deepEqual(countLetters(string2)["t"], 2);
  });

  it(`returns 2 for countLetters(${string2})["o"]`, () => {
    assert.deepEqual(countLetters(string2)["o"], 2);
  });

  it(`returns 2 for countLetters(${string2})["u"]`, () => {
    assert.deepEqual(countLetters(string2)["u"], 2);
  });

  it(`returns 2 for countLetters(${string2})["s"]`, () => {
    assert.deepEqual(countLetters(string2)["s"], 2);
  });

  it(`returns 3 for countLetters(${string2})["e"]`, () => {
    assert.deepEqual(countLetters(string2)["e"], 3);
  });

  it(`returns 1 for countLetters(${string2})["n"]`, () => {
    assert.deepEqual(countLetters(string2)["n"], 1);
  });

});