// Challenge

// For this challenge, think about the call stack and event loop and consider the order the console.logs you create will print to the console.
// First, create a console.log that logs: “I am the first console log”. Second, set a timer with setTimeout that will log to the console
// “I am the setTimeout callback” after 1000 ms. Third, add another console.log that logs “I am the final console log”. Now, run the code.

// After you’ve run the code, change the setTimeout timer for 0 ms and re-run the code. The event loop will come into play for when the setTimeout prints to the console.

console.log("I am the first console log");

setTimeout(() => console.log("I am the setTimeout callback"), 0);

console.log("I am the final console log");

// Please note there are no tests to run for this challenge.
