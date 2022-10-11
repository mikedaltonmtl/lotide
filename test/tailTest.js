const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {

  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns ['B', 'C', 'D', 'E'] for ['A', 'B', 'C', 'D', 'E']", () => {
    assert.deepEqual(tail(['A', 'B', 'C', 'D', 'E']), ['B', 'C', 'D', 'E']);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

});
