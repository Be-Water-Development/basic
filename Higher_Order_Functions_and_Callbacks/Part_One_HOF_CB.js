// Challenge

// Create a function pastTense that takes an array of strings as input and returns the past tense of the string.
// For example, “jump” would be converted to “jumped”. Return the past tense array.

const pastTense = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] += "ed";
  }
  return array;
};

// Uncomment below to check your work
// console.log(typeof pastTense); // function
// console.log(pastTense(["climb", "row", "jump"])); // [ 'climbed', 'rowed', 'jumped' ]

// Challenge

// Uncomment below to check your work

// Challenge

// Uncomment below to check your work

// Challenge

// Uncomment below to check your work

// Do not alter below this line
export const bundle = { pastTense: pastTense };
