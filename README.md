# random-number

## Description

Given the following function

``` javascript
function flip() {
  return Math.random() >= 0.5;
}
```

It's needed to implement a `randomNumber(n)` function that generates a random number greater than or equal to `0`, and less than input `n`.

Where:

```
n must be greater than 0
n must be less than 1,000,000
Your only source of randomness must be the provided flip() function
It's forbidden to use Math.random in the implementation
```

Boilerplate for `randomNumber` function

``` javascript
function randomNumber(n) {
  /*
    Your implementation, using the flip() function
  */
  
  // Returns a number between [0, n)
}
```

Example of execution:

``` javascript
randomNumber(500) // returns 123
randomNumber(1) // returns 0
randomNumber(500) // returns 466
randomNumber(1000001) // throw error
```

## Installing

This project has been built using `node v12.2.0`, you can use [nvm](https://github.com/nvm-sh/nvm) for handling multiple node versions.

This project uses jasmine as a unit test dependency. To install dependencies, execute the following command on the root of this project:

``` bash
npm install
```

## Running tests

The following test runs the spec for `randomNumber` function. It takes the examples of execution of the project's description inside this document.
``` bash
npm test
```
