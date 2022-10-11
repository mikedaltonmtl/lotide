const map = require('../map');
const assert = require('chai').assert;

describe("#map", () => {

  const words = ["ground", "control", "to", "major", "tom"];

  it('returns ["g", "c", "t", "m", "t"] for (words, word => word[0])', () => {
    assert.deepEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
  });

  it('returns ["groundly", "controlly", "toly", "majorly", "tomly"] for (words, word => word += "ly")', () => {
    assert.deepEqual(map(words, word => word += "ly"), ["groundly", "controlly", "toly", "majorly", "tomly"]);
  });

  it('returns ["gd", "cl", "to", "mr", "tm"] for (words, word => word[0] + word[word.length - 1])', () => {
    assert.deepEqual(map(words, word => word[0] + word[word.length - 1]), ["gd", "cl", "to", "mr", "tm"]);
  });

  it('returns [6, 7, 2, 5, 3] for (words, word => word.length)', () => {
    assert.deepEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
  });

});
