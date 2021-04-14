// Type coercion and typeof Operator

// Type coercion

// When adding together values in Javascript, the data types must be the same for Javascript to interpret the code correctly. Here is an example:

// console.log(3 + 3); // 6
// console.log("2" + "2"); // 22
// console.log(3 + "30"); // “330”

// The third console log is an example of type coercion. Since the data types are different, Javascript “coerces” or changes the number 3 into a string and concatenates the strings,
// resulting in a string of "330" being the return value.

// You can mix and mingle different values, but if one is a string, Javascript will coerce the number in a string.

// console.log(1 + "1" + 1); // “111”

// typeof operator

// To check the data type of a specific value, we can use the typeof operator. The typeof operator returns a string of the data type. Here are some example:

// console.log(typeof 22); // "number"
// console.log(typeof false); // "boolean"
// console.log(typeof "this is a string"); // "string"
// console.log(typeof [1, 2, 3]); // "object"

// All data types are inherently objects, and this gets a little tricky with arrays. Arrays will return “object” with the typeof operator.
// If you want to see if an array is an array, you can use the Array.isArray() method. Here is an example:

// console.log(Array.isArray(1)); // false
// console.log(Array.isArray([1, 2, 3])); // true

// Challenge

// Declare a variable stringOrNum and set it equal to the result of 5 + 5 + "5" + 5. What do you expect the return value to be?
// Think about it before you uncomment the console log.

//Add code here

const stringOrNum = 5 + 5 + "5" + 5;

//Uncomment to check your answer
//console.log(stringOrNum);

// Challenge continued

//Declare a variable favFoodType. Using the typeof operator, assign it the value of favFood’s data type.
//Declare a variable timesEatenType. Using the typeof operator, assign it the value of timesEaten’s data type.
//Declare a variable eatAgainType. Using the typeof operator, assign it the value of eatAgain’s data type.
//Declare a variable ripeProgressionArray. Using the Array.isArray() method, assign it the value of determining if ripeProgression is an array.

const favFood = "Avocados";
const timesEaten = 1298;
const eatAgain = true;
const ripeProgression = ["hard", "soft"];

//Add code here

const favFoodType = typeof favFood;
const timesEatenType = typeof timesEaten;
const eatAgainType = typeof eatAgain;
const ripeProgressionArray = Array.isArray(ripeProgression);

//Uncomment below to check your answers
// console.log(favFoodType); // "string"
// console.log(timesEatenType); // "number"
// console.log(eatAgainType); // "boolean"
// console.log(ripeProgressionArray); // "true"

//Do not alter below this line
export const bundle = {
  stringOrNum: stringOrNum,
  favFoodType: favFoodType,
  timesEatenType: timesEatenType,
  eatAgainType: eatAgainType,
  ripeProgressionArray: ripeProgressionArray,
};
