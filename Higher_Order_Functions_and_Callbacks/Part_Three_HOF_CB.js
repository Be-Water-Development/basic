// Challenge

// Create a function messOfArrays that will accept two arrays, an array of values and an array of callbacks.
// messOfArrays will return an object. The keys will be the first arrays values, the values for each key will be an array
// containing the results of running the key through each one of the callbacks.

const messOfArrays;

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

const amITrue = (arr, cb1, cb2) => {}

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

const sortMe;

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

const byFive;

// Uncomment below to check your work. Look up ternary operators to find out what's happening in the callback.
// console.log(typeof byFive) // function
// const divisibleByFive = (num) => (num % 5 === 0 ? "fives" : "others");
// console.log(byFive([1, 8, 30, 35, 17, 85, 5, 100], divisibleByFive)); // { others: 3, fives: 5 }

// Challenge continued

// Create a function groupMe that accepts an array and a callback and returns an object. groupMe will iterate through the array
// and invoke the callback for each array element. The object will consist of the return value from the callback as the key.
// The value will be an array containing all of the original passed in elements that resulted in the key when invoked with the callback.

const groupMe;

// Uncomment below to check your work
// const rounded = (num) => Math.round(num);
// console.log(typeof groupMe) // function
// console.log(groupMe([2.1, 3.1, 2.2, 3.3, 3.4], rounded)); // { '2': [ 2.1, 2.2 ], '3': [ 3.1, 3.3, 3.4 ] }

// Challenge continued

// Create a function ellloKeys that accepts an object and a callback and returns an array. The callback will return a boolean. elloKeys
// will iterate over the object and invoke the callback for each value. If true is returned from the callback, push the key associated
// with that value into the return array.

const elloKeys;

// Uncomment below to check your work
// console.log(typeof elloKeys); // function
// const ello = (string) => string.slice(1, 5).toLowerCase() === "ello";
// console.log(
//   elloKeys(
//     {
//       good: "jello",
//       cat: "bean",
//       job: "mellow",
//       with: "fellow",
//       dog: "dirt",
//       this: "bellow",
//       chester: "bacon",
//       unit: "cellos",
//     },
//     ello
//   )
// ); // [ 'good', 'job', 'with', 'this', 'unit' ]

