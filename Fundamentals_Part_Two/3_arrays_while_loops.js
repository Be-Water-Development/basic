// While loops

// The while loop loops through a block of code as long as the conditional expression evaluates to true.
// Here is an example, uncomment the console logs to see whats happening under the hood.

let count = 0;

while (count < 10) {
  count++;
  // console.log("this is our conditional expression:", count < 10);
  // console.log("this is our count:", count);
}

// console.log(count); // 10

// With while loops, be careful of creating an infinite loop!

// Challenge

let countDown = 10;

// Using a while loop, decrement countDown until it reaches zero.
// Add code here

while (countDown > 0) {
  countDown--;
}

// Uncomment below to check your answers
// console.log(countDown); // 0

// Challenge continued

// Declare a variable numToAdd and a varaible sum, set them both equal to zero. Using a while loop, add the value of numToAdd to sum, while incrementing numToAdd by one on each loop.
// The loop should execute while numToAdd is less than 15. Sum should equal the sum of numbers 0-14 when the loop is complete.
// Add code here

let numToAdd = 0;
let sum = 0;

while (numToAdd < 15) {
  sum += numToAdd++;
}

// Uncomment below to check your answers
// console.log(sum); // 105

//Do not alter below this line
export const bundle = { countDown: countDown, sum: sum };
