// index.js
const assertArraysEqual   = require('./assertArraysEqual');
const assertEqual         = require('./assertEqual');
const assertObjectsEqual  = require('./assertObjectsEqual');
const countLetters        = require('./countLetters');
const countOnly           = require('./countOnly');
const eqArrays            = require('./eqArrays');
const eqArraysRefactor    = require('./eqArraysRefactor');
const eqObjects           = require('./eqObjects');
const eqObjectsRefactor   = require('./eqObjectsRefactor');
const findKey             = require('./findKey');
const findKeyByValue      = require('./findKeyByValue');
const flatten             = require('./flatten');
const head                = require('./head');
const letterPositions     = require('./letterPositions');
const map                 = require('./map');
const middle              = require('./middle');
const tail                = require('./tail');
const takeUntil           = require('./takeUntil');
const without             = require('./without');

module.exports = {
  assertArraysEqual:  assertArraysEqual,
  assertEqual:        assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters:       countLetters,
  countOnly:          countOnly,
  eqArrays:           eqArrays,
  eqArraysRefactor:   eqArraysRefactor,
  eqObjects:          eqObjects,
  eqObjectsRefactor:  eqObjectsRefactor,
  findKey:            findKey,
  findKeyByValue:     findKeyByValue,
  flatten:            flatten,
  head:               head,
  letterPositions:    letterPositions,
  map:                map,
  middle:             middle,
  tail:               tail,
  takeUntil:          takeUntil,
  without:            without,
};
