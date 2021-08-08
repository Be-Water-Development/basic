// Challenge

// Recreate the built in array method forEach. forEach will accept an array and a callback as parameters. forEach will iterate through the array
// and pass each array element and its index to the callback function.

// Create a variable waitTime and assign it to an array with the numbers 100, 400, 1000 and 300 in that order.

// Create a function timeLog that takes the inputs time and an index. When invoked, the function should wait time milliseconds before logging to the
// console “printing element index” with the index being the actual index passed in.

// To wrap it all up, run the timeLog function on each item of the waitTime array using the forEach you just created.

const forEach;

const waitTime = [100, 400, 1000, 300];

const timeLog = (time, index) => {
  setTimeout(() => {
    console.log(`printing element ${index}`);
  }, time);
};

forEach(waitTime, timeLog);

// Do not alter below this line
export const bundle = {
  timeLog: timeLog,
  forEach: forEach,
};
