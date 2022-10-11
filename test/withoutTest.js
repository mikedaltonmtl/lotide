const without = require('../without');
const assert = require('chai').assert;

describe("#without", () => {

  it("returns [2, 3] for [1, 2, 3], [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns ['1', '2'] for ['1', '2', '3'], [1, 2, '3']", () => {
    assert.deepEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
  });

  it("does not return ['choc'] for ['chocs', 'cheese', 'carrot'], ['cheese', 'carrot']", () => {
    assert.notDeepEqual(without(['chocs', 'cheese', 'carrot'], ['cheese', 'carrot']), ['choc']);
  });

  it("returns ['chocs'] for ['chocs', 'cheese', 'carrot'], ['cheese', 'carrot']", () => {
    assert.deepEqual(without(['chocs', 'cheese', 'carrot'], ['cheese', 'carrot']), ['chocs']);
  });

});