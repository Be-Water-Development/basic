// Challenge

// Create a function pause that accepts two inputs, a callback and a wait time in milliseconds.
// pause should return a function that when called waits for the specified amount of time before executing the callback.
// You will need to research setTimeout() to complete this challenge.

const pause;

// Do not alter the below lines
let count = 0;
const pauseFunc = pause(() => count++, 1000);

// Uncomment below to check your work
// pauseFunc();
// console.log(count); // 0
// setTimeout(() => console.log(count), 1000); // "1" (after one second)

// Challenge continued

// Create a function passCode that accepts a callback and a string. The string will be a password.
// passCode will return a function that behaves like the passed in function, except when the password
// string is passed in as an argument. When the password string is passed in, the returned function
// will return an object with previously passed in arguments as keys, and the corresponding outputs as values.

const passCode;

// Do not alter the below lines
const timesEleven = (num) => num * 11;
const timesElevenAndLog = passCode(timesEleven, "123");

// Uncomment below to check your work
// console.log(timesElevenAndLog(2)); // 22
// console.log(timesElevenAndLog(3)); // 33
// console.log(timesElevenAndLog("123")); // {2: 22, 3: 33}

// Challenge continued

// Create a function seasonCycle that accepts an array, and returns a function. The returned function will have no arguments.
// When first invoked, the returned function will return the first element of the array. When invoked a second time, the
// returned function will return the second element of the array. This will continue until the last array element is reached,
// then the cycle will start over with the first array element.

const seasonCycle;

// Do not alter the below lines
const seasons = ["spring", "summer", "fall", "winter"];
const getSeason = seasonCycle(seasons);

// Uncomment below to check your work
// console.log(getSeason()); // spring
// console.log(getSeason()); // summer
// console.log(getSeason()); // fall
// console.log(getSeason()); // winter
// console.log(getSeason()); // spring

// Challenge continued

// Create a function firstInput that accepts a callback and an input. The callback function will accept at least one argument.
// firstInput will return a new function that invokes the callback function with the passed-in argument as the callbacks first argument.
// Any additional arguments needed by the callback will need to be passed into the return function.

const firstInput;

// Do not alter the below lines
const add;

const addToTen = firstInput(add, 10);

// Uncomment below to check your work
// console.log(addToTen(5, 4)); // 15

// Challenge continued
// Create a function currentDate that accepts a function and returns a function. The returned function will accept the inputs that the passed-in
// function accepts, and return an object with a date key that has the corresponding value as today’s date, the date will not include the time.
// The second key on the object will be an output key that has the corresponding value as the invocation of the passed in function.
// You will need to research the date object to complete this challenge.

function currentDate(){};

// Do not alter the below lines
const plusTen = currentDate((num) => (num += 10));

// Uncomment below to check your work, please note the date will change depending on when this challenge is completed.
// console.log(plusTen(2)); // { date: 'Tue May 18 2021', output: 12 }
// console.log(plusTen(4)); // { date: 'Tue May 18 2021', output: 14 }

// Challenge continued

// Create a function replaceMe that accepts no arguments. replaceMe will return a function that will accept either two strings, or one string.
// When two strings are passed in, the returned function will hold onto the two strings as a pair for future use. When one string is passed in,
// the returned function will return the same string, except all occurrences of a first string(of a saved pair) will be replaced with the second string(of a saved pair).

// ADD CODE HERE

const replaceMe;

// Do not alter the below lines
const swapMe = replaceMe();

// Uncomment below to check your work
// console.log(swapMe("star", "closure"));
// console.log(swapMe("diamond", "variable"));
// console.log(
//   swapMe(
//     "Twinkle, twinkle, little star, How I wonder what you are, Up above the world so high, Like a diamond in the sky"
//   )
// ); // Twinkle, twinkle, little closure, How I wonder what you are, Up above the world so high, Like a variable in the sky

