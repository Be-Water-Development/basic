// Bracket Notation

// Bracket notation utilizes indexes and [] to access a character at the specified index. An index is the location of a character within a string we want to access.
// Javascript uses a zero-based index system, so instead of starting the count at one, you would start the count at zero. Here is an example:

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// console.log(alphabet[0]); // "a"
// console.log(alphabet[3]); // "d"
// console.log(aafsdfasdfaslphabet[25]); // "z"

// One thing to note is you cannot alter strings with bracket notation since they are a primitive data type. A rule for primitive data types is that they are immutable,
// which means they cannot be changed. Here is an example:

// let text = "light";
// console.log(text[0]); // "l"
// text[0] = "n";

// console.log(text[0]); // "l"
// console.log(text); // "light"

// Text does not change from “light” to “night” because strings are immutable. If you wanted to change the value, you would have to reassign the value:

// let textTwo = "light";

// textTwo = "night";
// console.log(textTwo); // "night"

// Also keep in mind, if the variable was a constant variable, you cannot reassign the value.

// const textThree = "fight";
// textThree = "flight"; // Error! Cannot reassign to constant variable

// Challenge

// Declare a variable firstChar and assign it a value of the first letter of the variable joke using bracket notation.
// Declare a variable tenthChar and assign it a value of the tenth letter of the variable joke using bracket notation.
// Declare a variable lastChar and assign it a value of the last letter of the variable answer using bracket notation. Utilize the .length property learned
// in the string methods and properties section.

const joke = "why did the programmer quit their job?";
const answer = "because they didn’t get arrays";

//Add code here

const firstChar;
const tenthChar;
const lastChar;

// Uncomment below to check your answers
// console.log(firstChar); // "w"
// console.log(tenthChar); // "h"
// console.log(lastChar); // "s"

// Do not alter below this line
export const bundle = { first: firstChar, tenth: tenthChar, last: lastChar };
