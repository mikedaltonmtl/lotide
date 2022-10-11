const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {

  it('returns true for ({ a: "1", b: "2" }, { b: "2", a: "1" })', () => {
    assert.deepEqual(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });

  it('returns false for ({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" })', () => {
    assert.deepEqual(eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }), false);
  });

  it('returns true for ({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" })', () => {
    assert.deepEqual(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  });

  it('returns false for ({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] })', () => {
    assert.deepEqual(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }), false);
  });

});