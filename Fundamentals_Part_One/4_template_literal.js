// ES6 & Template Literal
// ECMAScript is a standardized version of JavaScript meant to unify the language's specifications and features.
// As all major browsers and JavaScript-runtimes follow this specification, the terms JavaScript and ECMAScript are interchangeable.
// ECMAScript 6 (ES6), released in 2015, brought about many new features to JavaScript which we will be exploring throughout this course.
// In this lesson we will focus on the template literal.

// Template literals are a special type of string that make creating complex strings so much easier.
// Template literals are created by surrounding text between opening and closing backticks (``).
// Inside a template literal, you're able to refer to variables or execute code by using ${}.
// Take a look at the following example:

// console.log(`10 + 25 = ${10 + 25}`) // => "10 + 25 = 35"
// By wrapping the calculation 10 + 25 in the ${}, we are able to calculate the total right there inside of the string.
// We can also refer to specific variables in a template literal as well:

// const firstName = 'Kyle';
// const greeting = `Hi, ${firstName}!`;
// console.log(greeting); // => "Hi, Kyle!"

// Challenge
// Declare two variables, `x` and `y` and set them to any two numbers you like
// Then declare a `solution` variable which is the result of adding x and y together
// within a sentence; the correct implementation will look like
// "The sum of a and b is c"
// Do not include punctuation in your solution.


//Do not alter below this line
export const bundle = { x: x, y: y, solution: solution };
