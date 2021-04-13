// if statement

// Sometimes in Javascript, we only want to execute a certain block of code if a condition evaluates to true or false.
// Conditional statements are how we determine if a block of code should be executed. Here is an example:

const arrayOfThings = [1, "owl", 45, "frog", false, true, "cat"];

for (let i = 0; i < arrayOfThings.length; i++) {
  if (typeof arrayOfThings[i] === "string") {
    arrayOfThings[i] += "s";
  }
}

// console.log(arrayOfThings); // [ 1, 'owls', 45, 'frogs', false, true, 'cats' ]

// In the above example, we utilize a for loop to iterate over the arrayOfThings. Then with a conditional statement, we determine if the typeof arrayOfThings[i] is a string. If that conditional
// statement evaluates to true, we execute the code inside the if statement, thus making all the strings in the array plural. If the condition evaluates to false,
// since typeof 1, 15, false and true does not equal "string", then that code is not executed for those array items.

// There are a few other conditional statements that you can, but not always should, utilize. Else if is another conditional statement that will execute if the if statement evaluates to false.
// else if blocks are typically chained after an if statement, same for else statements. An else statement is a catch all for any conditions that fall outside your if or if else statement.
// Here is an example:

const lotteryNum = 7;

//Uncomment the code below
// if (lotteryNum === 10) {
//   console.log("Winner winner");
// } else if (lotteryNum === 8) {
//   console.log("Second place");
// } else {
//   console.log("Better luck next time");
// }

// Here we are going to introduce the concept of code smell. As you learn more about coding, you will learn there are best practices, and there are ways of coding that can leave a smell behind.
// While both ways of writing out code can be correct, one is vastly preferred in the industry over the other. An example of using bad code smell is else and if else statements.
// You should rarely, if ever, use else or if else statements. All of the same code above can be accomplished without and else or if else statement and a good code smell.
// Here is an example:

//Uncomment the code below
// if (lotteryNum === 10) {
//   console.log("Winner winner");
// }
// if (lotteryNum === 8) {
//   console.log("Second place");
// }
// if (lotteryNum !== 8 && lotteryNum !== 10) {
//   console.log("Better luck next time");
// }

// Feel free to change the value lotteryNum to 8 and then 10 to see how both blocks of code return the same results. Going forward, try to not use else and if else statements, it will help you
// build better habits for the future. However, do not live and die by this rule, if you need an else or if else feel free to use them.

// Challenge

const num = 8;
let result;

// Use an if statement to check if num is greater than 10. If num is greater than 10, reassign the value of result to boolean true.
// If num is less than 10, assign the value of result to num times 11.
// Add code here

if (num > 10) {
  result = true;
}
if (num < 10) {
  result = num * 11;
}

// Challenge continued

const fizzbuzz = [];

// Use a loop to iterate through the numbers 1 through 20. Push each number into fizzbuzz, but push the string "fizz" in place of numbers divisible by 3, "buzz" in place of numbers divisible by
// 5, and fizzbuzz in place of numbers divisible by both 3 and 5. Remember to utilize the remainder/modulo operator.

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fizzbuzz.push("fizzbuzz");
  }
  if (i % 3 === 0 && i % 5 !== 0) {
    fizzbuzz.push("fizz");
  }
  if (i % 5 === 0 && i % 3 !== 0) {
    fizzbuzz.push("buzz");
  }
  if (i % 3 !== 0 && i % 5 !== 0) {
    fizzbuzz.push(i);
  }
}

//Uncomment the below to check your answers
// console.log(result); // 88
// console.log(fizzbuzz); // [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz']

// Do not alter below this line
export const bundle = { result: result, fizzbuzz: fizzbuzz };
