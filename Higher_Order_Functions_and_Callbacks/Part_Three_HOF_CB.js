// Challenge

// Create a function messOfArrays that will accept two arrays, an array of values and an array of callbacks.
// messOfArrays will return an object. The keys will be the first arrays values, the values for each key will be an array
// containing the results of running the key through each one of the callbacks.

const messOfArrays = (arr, cb) => {
  return arr.reduce((acc, item) => {
    const cbResults = [];
    cb.forEach((ele) => {
      cbResults.push(ele(item));
    });
    acc[item] = cbResults;
    return acc;
  }, {});
};

// Uncomment below to check your work
// console.log(typeof messOfArrays); // function
// const toUpper = (s) => s.toUpperCase();
// const toLower = (s) => s.toLowerCase();
// const sLength = (s) => s + " " + s.length;
// const lastLetter = (s) => s.slice(s.length - 1);
// const things = ["Goat", "Goose", "Cow", "Sheep"];
// const funcs = [toUpper, toLower, sLength, lastLetter];
// console.log(messOfArrays(things, funcs)); // {Goat: [ 'GOAT', 'goat', 'Goat 4', 't' ], Goose: [ 'GOOSE', 'goose', 'Goose 5', 'e' ], Cow: [ 'COW', 'cow', 'Cow 3', 'w' ], Sheep: [ 'SHEEP', 'sheep', 'Sheep 5', 'p' ]}

// Challenge continued

// Create a function amITrue that accepts an array and two callbacks. The callbacks will return true or false.
// amITrue will iterate through the array, and pass each element through both callbacks.
// Each element must return true from both callbacks to be considered a true result. If the majority of the results evaluate to true,
// then amITrue will return true. If the number of true returns and false returns are equal, or the majority of the returns are false,
// amITrue will return false.

const amITrue = (arr, cb1, cb2) => {
  const t = [];
  const f = [];

  arr.forEach((ele) => {
    if (cb1(ele) === true && cb2(ele) === true) {
      t.push(true);
    }
    if (cb1(ele) === false || cb2(ele) === false) {
      f.push(false);
    }
  });

  if (t.length > f.length) {
    return true;
  }
  return false;
};

// Uncomment below to check your work
// console.log(typeof amITrue); // function
// console.log(
//   amITrue(
//     [15, 5, 30, 90, 2],
//     (num) => num % 3 === 0,
//     (num) => num % 5 === 0
//   )
// ); // true
// console.log(
//   amITrue(
//     [22, 5, 45, 90, 17],
//     (num) => num % 3 === 0,
//     (num) => num % 5 === 0
//   )
// ); // false
// console.log(
//   amITrue(
//     [16, 45, 90, 77],
//     (num) => num % 3 === 0,
//     (num) => num % 5 === 0
//   )
// ); // false

// Challenge continued

// Create a function sortMe that accepts an array and a callback. The callback will return a boolean. sortMe should iterate through the array,
// and pass each array item through a callback. sortMe will return a new array, and array elements that return a true value should come first in the array,
// and the array elements that return a false value should come second.

const sortMe = (arr, cb) => {
  const t = [];
  const f = [];

  arr.forEach((ele) => {
    if (cb(ele) === true) {
      t.push(ele);
    }
    if (cb(ele) === false) {
      f.push(ele);
    }
  });

  return t.concat(f);
};

// Uncomment below to check your work
// console.log(typeof sortMe); // function
// console.log(
//   sortMe(
//     ["spider", "avocados", "panther", "antelope", "cheetah", "aardvark"],
//     (s) => s.toLowerCase().startsWith("a")
//   )
// ); // [ 'avocados', 'antelope', 'aardvark', 'spider', 'panther', 'cheetah' ]

// Challenge continued

// Create a function byFive that accepts an array and a callback and returns an object. byFive will iterate through the array and invoke the
// callback for each array element. The return object will consist of the return value from the callback as keys, and thevalue will be the
// number of times that return value was returned from the callback.

const byFive = (arr, cb) => {
  return arr.reduce((acc, item) => {
    acc[cb(item)] = (acc[cb(item)] || 0) + 1;
    return acc;
  }, {});
};

// Uncomment below to check your work. Look up ternary operators to find out what's happening in the callback.
// const divisibleByFive = (num) => (num % 5 === 0 ? "fives" : "others");
// console.log(byFive([1, 8, 30, 35, 17, 85, 5, 100], divisibleByFive)); // { others: 3, fives: 5 }

// Challenge continued

// Create a function groupMe that accepts an array and a callback and returns an object. groupMe will iterate through the array
// and invoke the callback for each array element. The object will consist of the return value from the callback as the key.
// The value will be an array containing all of the original passed in elements that resulted in the key when invoked with the callback.

// const groupMe = (arr, cb) => {
//   return arr.reduce((acc, item) => {

//   }, {})
// }

// Uncomment below to check your work
// const rounded = (num) => Math.round(num);
// console.log(groupMe([2.2, 3.4, 2.1, 3.3, 3.1], rounded));

// Do not alter below this line
export const bundle = {
  messOfArrays: messOfArrays,
  amITrue: amITrue,
  sortMe: sortMe,
  byFive: byFive,
};
