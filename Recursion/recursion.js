// Challenge

// Create a function repeatMe that takes an input character and returns that character repeated 6 times using recursion.

function repeatMe(){}

// Uncomment below to check your work
// console.log(repeatMe("y")); // "yyyyyy"
// console.log(repeatMe("z")); // "zzzzzz"

// Challenge continued

// Create a function sumMe that accepts an array of integers and returns the sum of all array elements using recursion.

const sumMe;

// Uncomment below to check your work
// console.log(sumMe([1, 2, 3, 4, 5, 6])); // 21
// console.log(sumMe([0, 11, 2, 13, 4])); // 30

// Challenge continued

// Create a function factorial that returns the factorial of a number. For example, factorial(5) should return 120 because 5 * 4 * 3 * 2 * 1 = 120.

function factorial(){}

// Uncomment below to check your work
// console.log(factorial(5)); // 120
// console.log(factorial(0)); // 1
// console.log(factorial(7)); // 5040

// Challenge continued

// Create a function getLength that gets the length of an array using recursion without accessing its length property.

function getLength(){}

// Uncomment below to check your work
// console.log(getLength([1])); // 1
// console.log(getLength([1, 2, 3, 4, 5])); // 5
// console.log(getLength([1, 2, 3])); // 3
// console.log(getLength([])); // 0

// Challenge continued

// Create a function powerOf that takes two inputs, a base and an exponent, and returns the value of base ^ exponent using recursion.

const powerOf;

// Uncomment below to check your work
// console.log(powerOf(3, 3)); // 27
// console.log(powerOf(4, 6)); // 4096
// console.log(powerOf(1, 1)); // 1

// Challenge continued

// Create a function pass that accepts an array of functions, and a number that will be passed through the array of functions.
// The input number will be passed through the first function, then the second, then the third and so on.
// Return the last output from the final array function using recursion.

function pass(){}

// Do not alter the below lines
const timesEleven = (num) => num * 11;
const plusSeven = (num) => num + 7;
const divideByTwo = (num) => num / 2;
const minusTen = (num) => num - 10;
const funcArray = [timesEleven, plusSeven, divideByTwo, minusTen];

// Uncomment below to check your work
// console.log(pass(5, funcArray)); // 21
// console.log(pass(3, funcArray)); // 10

// Do not alter below this line
export const bundle = {
  repeatMe: repeatMe,
  sumMe: sumMe,
  factorial: factorial,
  getLength: getLength,
  powerOf: powerOf,
  pass: pass,
  funcArray: funcArray,
};
