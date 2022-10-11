const eqObjectsRefactor = require('../eqObjectsRefactor');
const assert = require('chai').assert;

describe("#eqObjectsRefactor", () => {

  it('returns true for ({ a: "1", b: "2" }, { a: "1", b: "2" })', () => {
    assert.deepEqual(eqObjectsRefactor({ a: "1", b: "2" }, { a: "1", b: "2" }), true);
  });

  it('returns true for ({ a: "1", b: "2" }, { b: "2", a: "1" })', () => {
    assert.deepEqual(eqObjectsRefactor({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });

  it('returns false for ({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" })', () => {
    assert.deepEqual(eqObjectsRefactor({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }), false);
  });

  it('returns true for ({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" })', () => {
    assert.deepEqual(eqObjectsRefactor({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  });

  it('returns false for ({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] })', () => {
    assert.deepEqual(eqObjectsRefactor({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }), false);
  });

  it('returns true for ({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })', () => {
    assert.deepEqual(eqObjectsRefactor({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });

  it('returns false for ({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }', () => {
    assert.deepEqual(eqObjectsRefactor({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });

  it('returns false for ({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }', () => {
    assert.deepEqual(eqObjectsRefactor({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });

  it('returns true for ({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: 1 }, b: 2 })', () => {
    assert.deepEqual(eqObjectsRefactor({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: 1 }, b: 2 }), true);
  });

  it('returns true for ({ a: { y: 0, z: { x: 3 } }, b: 2 }, { b: 2, a: { y: 0, z: { x: 3 } } })', () => {
    assert.deepEqual(eqObjectsRefactor({ a: { y: 0, z: { x: 3 } }, b: 2 }, { b: 2, a: { y: 0, z: { x: 3 } } }), true);
  });

  it('returns false for ({ a: { y: 0, z: { x: 3 } }, b: 2 }, { a: { y: 0, z: { x: 4 } }, b: 2 }', () => {
    assert.deepEqual(eqObjectsRefactor({ a: { y: 0, z: { x: 3 } }, b: 2 }, { a: { y: 0, z: { x: 4 } }, b: 2 }), false);
  });

  it('returns false for ({ a: { y: 0, z: { x: 3 } }, b: 2 }, { a: { y: 0, z: { x: 4, w:1 } }, b: 2 }', () => {
    assert.deepEqual(eqObjectsRefactor({ a: { y: 0, z: { x: 3 } }, b: 2 }, { a: { y: 0, z: { x: 4, w:1 } }, b: 2 }), false);
  });

  it('returns true for ({ m: [1, 2], n: "x", a: { y: 0, z: { x: 4, w:1 } }, b: 2 }, { b: 2, a: { y: 0, z: { x: 4, w:1 } }, m: [1, 2], n: "x" })', () => {
    assert.deepEqual(eqObjectsRefactor({ m: [1, 2], n: "x", a: { y: 0, z: { x: 4, w:1 } }, b: 2 }, { b: 2, a: { y: 0, z: { x: 4, w:1 } }, m: [1, 2], n: "x" }), true);
  });

});