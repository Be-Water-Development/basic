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

// Challenge continued

// Create a function timesEleven that accepts a number, and returns that number times 11.

// Now create a function map that takes two arguments, one is an array of numbers, and the other is a callback function.
// Your function map should return a new array of numbers that are a result of using the callback function on each element of
// the argument array. Map should utilize a for loop, please do not use map or forEach methods.

const timesEleven = (num) => num * 11;

const map = (arr, cb) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i]));
  }
  return result;
};

// Uncomment below to check your work
// console.log(typeof timesEleven); // function
// console.log(typeof map); // function
// console.log(map([1, 2, 3, 4], timesEleven)); // [11, 22, 33, 44]

// Challenge continued

// Create a function forEach that accepts an array and a callback. forEach will run the callback on each element of the array with a for loop without returning anything.
// Now, rebuild map from the previous challenge, name the function mapTwo. Instead of using a for loop, use the forEach function that was just created.

const forEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
};

const mapTwo = (arr, cb) => {
  let result = [];
  forEach(arr, (num) => {
    result.push(cb(num));
  });
  return result;
};

// Uncomment below to check your work
// console.log(typeof forEach); // function
// console.log(typeof mapTwo); // function
// forEach(["x", "y", "z"], (x) => console.log(x.toUpperCase())); // X, Y, Z
// console.log(map([1, 2, 3], (y) => y * 2)); // [ 2, 4, 6 ]

// Challenge continued

// Complete the functions cb1 and cb2 in the places marked add code here to return the desired output in the console logs below.

const filterThisArray = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const cb1 = (string) => {
  // Add code here
  if (string === string.toUpperCase()) {
    return string;
  }
};

const cb2 = (string) => {
  // Add code here
  if (string === string.toLowerCase()) {
    return string;
  }
};

const arrayOfThings = ["CAT", "dog", "CATDOG", "wish", "WISHBONE"];

// Uncomment below to check your work
// console.log(filterThisArray(arrayOfThings, cb1)); // [ 'CAT', 'CATDOG', 'WISHBONE' ]
// console.log(filterThisArray(arrayOfThings, cb2)); // [ 'dog', 'wish' ]

// Challenge continued

// Create a function orFilter that accepts an array and two seperate callbacks. Using the built in array method filter, return an array that contains
// all of the elements that return a truthy value from either of the two callbacks.

const orFilter = (array, cb1, cb2) => {
  return array.filter((ele) => {
    if (cb1(ele) || cb2(ele)) {
      return ele;
    }
  });
};

// Uncomment below to check your work
// console.log(typeof orFilter); // function
// const animals = ["bobcats", "monkeys", "seal", "lizard", "snake", "elephant"];
// console.log(
//   orFilter(
//     animals,
//     (s) => s.endsWith("s"),
//     (k) => k.startsWith("s")
//   )
// ); // [ 'bobcats', 'monkeys', 'seal', 'snake' ]

// Do not alter below this line
export const bundle = {
  pastTense: pastTense,
  map: map,
  timesEleven: timesEleven,
  mapTwo: mapTwo,
  forEach: forEach,
  filterThisArray: filterThisArray,
  cb1: cb1,
  cb2: cb2,
  arrayOfThings: arrayOfThings,
  orFilter: orFilter,
};
