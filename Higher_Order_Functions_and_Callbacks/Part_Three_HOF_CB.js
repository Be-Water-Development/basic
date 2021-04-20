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

// Do not alter below this line
export const bundle = { messOfArrays: messOfArrays, amITrue: amITrue };
