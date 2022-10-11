const eqArraysRefactor = require('../eqArraysRefactor');
const assert = require('chai').assert;

describe("#eqArraysRefactor", () => {

  it("returns true for ([1, 2, 3], [1, 2, 3]))", () => {
    assert.deepEqual(eqArraysRefactor([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for ([1, 2, 3], [3, 2, 1]))", () => {
    assert.deepEqual(eqArraysRefactor([1, 2, 3], [3, 2, 1]), false);
  });

  it("returns false for ([3, 2, 1], [3, 2, 1, 0]))", () => {
    assert.deepEqual(eqArraysRefactor([3, 2, 1], [3, 2, 1, 0]), false);
  });

  it("returns false for ([3, 2, 1, 0], [3, 2, 1]))", () => {
    assert.deepEqual(eqArraysRefactor([3, 2, 1, 0], [3, 2, 1]), false);
  });

  it('returns true for (["1", "2", "3"], ["1", "2", "3"]))', () => {
    assert.deepEqual(eqArraysRefactor(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it('returns false for (["1", "2", "3"], ["1", "2", 3]))', () => {
    assert.deepEqual(eqArraysRefactor(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it('returns true for ([1, [2, 3], [4]], [1, [2, 3], [4]]))', () => {
    assert.deepEqual(eqArraysRefactor([1, [2, 3], [4]], [1, [2, 3], [4]]), true);
  });

  it('returns false for ([[2, 3], [4]], [[2, 3], [4, 5]]))', () => {
    assert.deepEqual(eqArraysRefactor([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });

  it('returns false for ([[2, 3], [4]], [[2, 3], 4]))', () => {
    assert.deepEqual(eqArraysRefactor([[2, 3], [4]], [[2, 3], 4]), false);
  });

  it('returns false for ([[2, 3], [4, [5, 6]]], [[2, 3], 4, [5, 6]]))', () => {
    assert.deepEqual(eqArraysRefactor([[2, 3], [4, [5, 6]]], [[2, 3], 4, [5, 6]]), false);
  });

  it('returns false for ([[2, 3], [4, [5, 6]]], [[2, 3], [4, [5, "6"]]]))', () => {
    assert.deepEqual(eqArraysRefactor([[2, 3], [4, [5, 6]]], [[2, 3], [4, [5, "6"]]]), false);
  });

  it('returns true for ([[2, 3], [4, [5, [6]]]], [[2, 3], [4, [5, [6]]]]))', () => {
    assert.deepEqual(eqArraysRefactor([[2, 3], [4, [5, [6]]]], [[2, 3], [4, [5, [6]]]]), true);
  });

});
