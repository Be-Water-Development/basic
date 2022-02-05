// Challenge

// Create a function order that accepts an array of functions and an array of times in milliseconds.
// order should invoke the functions in order, with the corresponding numbers in milliseconds being the time to wait from the last invocation.

const order = () => {};

// Do not alter the below lines
const green = () => {
  console.log("green");
};
const eggs = () => {
  console.log("eggs");
};
const andHam = () => {
  console.log("& ham");
};

order([green, eggs, andHam], [300, 200, 500]);
// should log:
// 'green' after 300ms
// 'eggs' 200ms after green
// '& ham' 500ms after eggs

