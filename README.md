# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @olawalea/lotide`

**Require it:**

`const _ = require('@olawalea/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...);`: Extract the first element of an array
* `tail(...);`: Returns all elements of an array except the first element
* `middle(...);`: Returns the element(s) in the middle of an array
* `assertEqual(...);`: Checks if two values are equal
* `eqArrays(...);`: Checks if two arrays are equal (perfect match)