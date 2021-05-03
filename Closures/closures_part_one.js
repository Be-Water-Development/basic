// Challenge

// Create a function welcomeTo that creates and returns a function. When the newly created function is called,
// it should return the string “Welcome to closures!”

const welcomeTo = () => {
  return () => {
    return "Welcome to closures!";
  };
};

// Do not alter the below line
const myFunc = welcomeTo();

// Uncomment below to check your work
// console.log(typeof welcomeTo); // function
// console.log(myFunc()); // Welcome to closures!

// Challenge continued

// Create a function passingStrings that accepts one input and returns a function. When the created function is called,
// it should return the string that was passed to passingStrings when it was created.

// Uncomment below to check your work
console.log(typeof passingStrings); // function

// Do not alter below this line
export const bundle = {
  myFunc: myFunc,
  welcomeTo: welcomeTo,
};
