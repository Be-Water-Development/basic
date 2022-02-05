// Numbers

// Another primitive data type is numbers. They can be stored inside a variable, and are not wrapped in quotes. If a number was wrapped in quotes,
// it would be converted into a string.

// let number = 16; // number is a number
// let numText = "16"; // numText is a string.

// You can perform numerical operations on numbers with addition (+), subtraction (-), multiplication (*) and division (/) operators. Here are some examples:

// let sum = 5 + 5;
// console.log(sum); // 10

// let num = 15;
// let numMinusFive = num - 5;
// console.log(numMinusFive); // 10

// let numToMultiply = 6;
// console.log(numToMultiply * 6); // 36

// let numToDivide = 20;
// console.log(numToDivide / 5); // 4

// Floats

// Any number with a decimal point is considered a float. Javascript can cause rounding errors with floats, and they cannot always be represented accurately.
// This has to do with how Javascript handles numbers under the hood. Keep this in mind when dealing with decimals in Javascript. Here is an example:

// const threeHundredTimesThree = 300.3 * 3;
// console.log(threeHundredTimesThree); //900.9000000000001

// You’d expect the answer to be 900.9, but Javascript returns 900.9000000000001 due to Javascript rounding errors. You can read more about floats here:
// https://en.wikipedia.org/wiki/Floating-point_arithmetic#Accuracy_problems

// Challenge

// Declare a variable oneHundred and set it equal to 100.
// Declare a variable plusTen and set it equal to the variable oneHundred plus ten.
// Declare a variable minusTen and set it equal to the variable oneHundred minus ten.
// Declare a variable timesTen and set it equal to the variable oneHundred times ten.
// Declare a variable divideByFive and set it equal to the variable oneHundred divided by five.


//Uncomment the following to check your answers
// console.log(oneHundred); // 100
// console.log(plusTen); // 110
// console.log(minusTen); // 90
// console.log(timesTen); // 1000
// console.log(divideByFive); // 20

