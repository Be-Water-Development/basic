// Additional Challenges

// Using a for loop, starting at index 0, push 7 subarrays into nestedArray. Each nested array item should concatenate the index with the following string [iteration(i), (i)].
// An example of the subarray would be [iteration0, 0].

const nestedSubarray = [];

// Add code here

for (let i = 0; i < 8; i++) {
  nestedSubarray.push([`iteration${i}, ${i}`]);
}

// Uncomment below to check your answer
// console.log(nestedSubarray); // [['iteration0, 0'], ['iteration1, 1'], ['iteration2, 2'], ['iteration3, 3'], ['iteration4, 4'], ['iteration5, 5'], ['iteration6, 6'], ['iteration7, 7']]

// Challenge continued

// Using a for loop, iterate over the array animals. If the string inside animals starts with “s”, then add the string as the key and the index as the value to the object sStrings.
// Research the string startsWith() method and adding key/value pairs to objects to complete this challenge.

const animals = ["snake", "elephant", "spider", "mouse", "seal"];
const sStrings = {};

// Add code here

for (let i = 0; i < animals.length; i++) {
  if (animals[i].startsWith("s")) {
    sStrings[animals[i]] = i;
  }
}

// Uncomment below to check your answer
// console.log(sStrings); // { snake: 0, spider: 2, seal: 4 }

// Challenge continued

// Using a for… in loop, iterate over the object addThis. If the value in addThis is a number, add that number to the variable sum.

const addThis = {
  gold: 1,
  stars: "88",
  all: 10,
  around: true,
  great: 7,
  work: "$$$$",
};
let sum = 0;

for (let prop in addThis) {
  if (typeof addThis[prop] === "number") {
    sum += addThis[prop];
  }
}

// Uncomment below to check your answer
// console.log(sum); // 18

export const bundle = {
  nestedSubarray: nestedSubarray,
  sStrings: sStrings,
  sum: sum,
};
