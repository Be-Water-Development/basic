// Challenge

// Create a function sunshine that accepts the argument hour. Sunshine returns “Sun will rise soon” if the hour is before 6,
// “Sun is up” if the hour is before 19, and “Sun is setting” if the hour is 19 or after.

const sunshine;

// Uncomment below to check your work
// console.log(typeof sunshine); // function
// console.log(sunshine(4)); // Sun will rise soon
// console.log(sunshine(6)); // Sun is up
// console.log(sunshine(10)); // Sun is up
// console.log(sunshine(19)); // Sun is setting
// console.log(sunshine(24)); // Sun is setting

// Challenge continued

// Create a function getGrade that accepts a grade as an argument and returns the appropriate letter grade.
// Grades 90 and above should return "A"
// Grades 80 to 89 should return "B"
// Grades 70 to 79 should return "C"
// Grades 60 to 69 should return "D"
// Grades 59 and below should return "F"

const getGrade;

// Uncomment below to check your work
// console.log(getGrade(96)); // A
// console.log(getGrade(80)); // B
// console.log(getGrade(74)); // C
// console.log(getGrade(66)); // D
// console.log(getGrade(55)); // F

// Challenge continued

// Complete the function treasure that accepts an array of strings and iterates over the array using a for loop. Update the result variable to “Treasure found!”
// if the array contains the string “treasure”. If no treasure is found, update the variable result to “Keep searching!” Return the updated result.

function treasure(){}

// Uncomment below to check your work
// console.log(treasure(["turtles", "squid", "ship wreck", "whale", "treasure"])); // Treasure found!
// console.log(
//   treasure(["sand", "seal", "dolphin", "seasquatch", "kelp", "urchins"]) // Keep searching!
// );

// Challenge continued

// Complete the function endsWithS that accepts an array of strings, and iterates over the array using the build in forEach method.
// Push any strings that end with the letter “s” into the results array, and return the updated results array.
// You can learn about the forEach method here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

function endsWithS(){}

// Uncomment below to check your work
// console.log(
//   endsWithS([
//     "lions",
//     "lynx",
//     "penguins",
//     "tiger",
//     "snakes",
//     "otters",
//     "meerkat",
//   ]) //[ 'lions', 'penguins', 'snakes', 'otters' ]
// );

// Challenge continued

// Complete the function y2K that accepts an array of numbers and iterates through the array. If the array contains the number 2000,
// return the string “It’s the end of the world!”. Otherwise, return the string “World still exists”.
// Do not use a variable to store the result that you are returning.

function y2K(){}

// Uncomment below to check your work
// console.log(y2K([1999, 3000, 2400, 4700, 1800, 7000])); // World still exists
// console.log(y2K([1000, 2038, 2000, 1876, 1492, 1899])); // It's the end of the world!

// Challenge continued

// Using a for loop, create a function addX that accepts two parameters, array and x. AddX adds the argument x to each number in the array and returns the updated array.

const addX;

// Uncomment below to check your work
// console.log(typeof addX); // function
// console.log(addX([1, 2, 3, 4], 2)); // [ 3, 4, 5, 6 ]
// console.log(addX([7, 8, 9, 10], 10)); // [ 17, 18, 19, 20 ]

// Do not alter below this line
export const bundle = {
  sunshine: sunshine,
  getGrade: getGrade,
  treasure: treasure,
  endsWithS: endsWithS,
  y2K: y2K,
  addX: addX,
};
