# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mikedalton/lotide`

**Require it:**

`const _ = require('@mikedalton/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arrA, arrB)`: prints (passed / failed) whether 2 given arrays (not nested) are identical.

* `assertEqual(actual, expected)`: prints (passed / failed) whether 2 given values (of primitive data types) are identical.

* `assertObjectsEqual(actual, expected)`: prints (passed / failed) whether 2 given objects (not nested) are identical.

* `countLetters(string)`: returns an object containing the number of instances of each letter that exists in the given string.

* `countOnly(allItems, itemsToCount)`: returns an object containing the number of instances of each string marked 'true' (in the itemsToCount object) found in the allItems array.

* `eqArrays(arrA, arrB)`: returns true if 2 given arrays (cannot be nested) are identical, false if not.

* `eqArraysRefactor(array1, array2)`: returns true if given arrays (which may contain nested arrays) are identical, false if not.

* `eqObjects(object1, object2)`: returns true if given objects (which do not contain nested objects) have identical key / value pairs, otherwaise returns false.

* `eqObjectsRefactor(object1, object2)`: returns true if both given objects have identical key value pairs, otherwise returns false.  Given objects may contain nested objects.

* `findKey(object, callback)`: returns the first key in the given object for which the callback function returns a truthy value. If no key is found, then it will return undefined.

* `findKeyByValue(object, value)`: returns the first key in the given object which contains the given value. If no key with the given value is found, it will return undefined.

* `flatten(packed)`: will 'flatten' an array containing one level of nested arrays.  Returns a non-nested array containing all of the elements from the given array.

* `head(array)`: returns the value of the first element in a given array.

* `letterPositions(sentence)`: returns an objects containing all of the indices (zero-based positions) in the given string at which each character is found.

* `map(array, callback)`: returns a new array based on results of the callback function on each element of the given array.  The given array is not modified.

* `middle(array)`: returns the middle-most element of a given array.  If the given array has an even number of elements, an array of the two 'middle-most' elements will be returned. If the given array has fewer than 3 elements, an empty array will be returned.

* `tail(array)`: returns copy of given array excluding the first element (array[0]). If the given array is empty, or only contains one element, an empty array is returned.

* `takeUntil(array, callback)`: beginning at the start of the given array (element[0]), function will return a slice of the array containing all of the elements found up until the element which returns a truthy value from the given callback function.

* `without(source, itemsToRemove)`: return new array of elements from the given source array, minus the elements specified in the itemsToRemove array.
