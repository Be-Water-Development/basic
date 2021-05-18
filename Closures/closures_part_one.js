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

const passingStrings = (string) => {
  return () => {
    return string;
  };
};

// Do not alter the below line
const passedFunc = passingStrings("Hello world");

// Uncomment below to check your work
// console.log(typeof passingStrings); // function
// console.log(passedFunc()); // Hello World

// Challenge continued

// Review the below code. innerFunc is being returned from the wrapper function and innerFunc is using variables outside it’s scope.
// Try to determine the outputs that will be logged to the console below uncommenting those lines of code.
// There is no code to add to this challenge.

const wrapper = () => {
  let count = 0;
  const innerFunc = () => {
    count++;
    console.log("count", count);
  };
  return innerFunc;
};

// Do not alter the below lines
const countOne = wrapper();
const countTwo = wrapper();

// Uncomment below to check your work
// countOne();
// countOne();
// countOne();

// countTwo();
// countTwo();

// countOne();

// Challenge continued

// Create a function addByY that returns a function that will add an input by y.

const addByY = (num1) => {
  return (num2) => {
    return num1 + num2;
  };
};

// Do not alter the below line
const addByThree = addByY(3);

// Uncomment below to check your work
// console.log(typeof addByY); // function
// console.log(addByThree(2)); // 5
// console.log(addByThree(3)); // 6

// Challenge continued

// Create a function oneTime that accepts a callback and returns a function. When the function is called the first time,
// it should execute the callback and return the output. If the function is called any additional times, it will return
// the output from the first call to the function.

const oneTime = (cb) => {
  let ran = false;
  let output;
  return (num) => {
    if (!ran) {
      ran = true;
      output = cb(num);
    }
    return output;
  };
};

// Do not alter the below line
const timesElevenOneTime = oneTime((num) => num * 11);

// Uncomment below to check your work
// console.log(typeof oneTime); // function
// console.log(timesElevenOneTime(2)); // 22
// console.log(timesElevenOneTime(4)); // 22
// console.log(timesElevenOneTime(6)); // 22

// Challenge continued

// Create a function post that accepts the number of times the callback needs to be called before being executed
// as the first input and the callback as the second input.

const post = (num, cb) => {
  let count = 0;
  return (string) => {
    count++;
    if (count >= num) {
      return cb(string);
    }
  };
};

// Do not alter the below lines
const called = (string) => {
  return "Howdy " + string;
};
const postCall = post(4, called);

// Uncomment below to check your work
// console.log(postCall("partner")); // undefined
// console.log(postCall("partner")); // undefined
// console.log(postCall("partner")); // undefined
// console.log(postCall("partner")); // "Howdy partner"

// Do not alter below this line
export const bundle = {
  myFunc: myFunc,
  welcomeTo: welcomeTo,
  passingStrings: passingStrings,
  passedFunc: passedFunc,
  addByY: addByY,
  addByThree: addByThree,
  timesElevenOneTime: timesElevenOneTime,
  oneTime: oneTime,
  postCall: postCall,
  post: post,
};
