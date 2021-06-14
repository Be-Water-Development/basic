// Challenge

// Create a function addTen that accepts a number, and returns the number plus 10.

const addTen = (num) => num + 10;

// Uncomment below to check your work
// console.log(typeof addTen); // function
// console.log(addTen(5)); // 15

// Challenge continued

// Create a function addExclamation that accepts a string, and returns the string with "!" added to the end.

const addExclamation = (string) => (string += "!");

// Uncomment below to check your work
// console.log(typeof addExclamation); // function
// console.log(addExclamation("tacos")); // tacos!

// Challenge continued

// Create a function whatsUp that accepts a string, and returns the string "Whats up (string)?", with the passed in string added before the question mark.

const whatsUp = (string) => `Whats up ${string}?`;

// Uncomment below to check your work
// console.log(typeof whatsUp); // function
// console.log(whatsUp("doc")); // Whats up doc?

// Challenge continued

// Create a function addTwoNums that accepts two numbers as parameters, num1 and num2, and returns the string '(num1) plus (num2) equals (num1 + num2)'.

const addTwoNums = (num1, num2) => `${num1} plus ${num2} equals ${num1 + num2}`;

// Uncomment below to check your work
// console.log(typeof addTwoNums); // function
// console.log(addTwoNums(3, 4)); // 3 plus 4 equals 7

// Challenge continued

// Create a function lastLetter that utilizes bracket notation to return the last letter or character of a string.

const lastLetter = (string) => string[string.length - 1];

// Uncomment below to check your work
// console.log(typeof lastLetter); // function
// console.log(lastLetter("AVOCADOS")); // S
// console.log(lastLetter("lime")); // e
// console.log(lastLetter("salsa")); // a
// console.log(lastLetter("guac!")); // !

// Challenge continued

// Convert the function below into ES6 arrow function syntax.

// Starter code to convert
// function sunglasses(string) {
//   return `I wear my sunglasses at ${string}`;
// }

const sunglasses = (string) => {
  return `I wear my sunglasses at ${string}`;
};

// Uncomment below to check your work
// console.log(typeof sunglasses); // function
// console.log(sunglasses("night")); // I wear my sunglasses at night

// Do not alter below this line
export const bundle = {
  addTen: addTen,
  addExclamation: addExclamation,
  whatsUp: whatsUp,
  addTwoNums: addTwoNums,
  lastLetter: lastLetter,
  sunglasses: sunglasses,
};
