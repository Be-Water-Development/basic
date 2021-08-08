// Booleans

// Booleans are a primitive data type in Javascript that can hold the value true or false. You can conditionally render blocks of code with
// booleans which will be useful down the road. Many built Javascript methods return either true or false. Here is an example:

let likesBeets = true;
let likesBears = false; // notice no quotes

// console.log(`Dwight likes beets? ${likesBeets}`);
// console.log(`Jim likes bears? ${likesBears}`);

// Comparison Operators

// Comparison operators are how we compare different values in Javascript. All comparison operators return boolean values.

// < Less than
// > Greater than
// <= Less than or equal to
// >= Greater than or equal to
// == Is loosely equal to
// === Is strictly equal to
// != Is not loosely equal to
// !== Is not strictly equal to

// Here are a couple examples:

// console.log(1 < 2); // true
// console.log(2 > 1); // true
// console.log(1 >= 1); // true
// console.log(1 >= 2); // false

// Loosely equal and strictly equal can be a bit tricky to get used to. Loosely equal checks if two values have the same value, even if one’s data type is different from the other.
// Please note booleans are an exception to this.
// Here is an example:

// console.log(2 == 2); // true
// console.log("2" == 2); // true
// console.log(false == false); // true
// console.log("false" == false); // false

// Strictly equal requires values to have the same value and the same data type. Here is an example:

// console.log(2 === 2); // true
// console.log(2 === "2"); // false
// console.log(false === false); // true
// console.log(false === "false"); // false

// Challenge

// Declare a variable smallNum and set it equal to 5, declare another variable bigNum and set is equal to 10.
// Declare a variable isBigger and assign the value to be a comparison if bigNum is greater than small num.
// Declare a variable favNum and set it equal to your favorite number as a number. Declare another variable favNumString and set it equal to your favorite number as a string.
// Declare a variable isLooselyEqual and assign its value to be a comparison of favNum and favNumString with the loosely equal operator.
// Declare a variable isStrictlyEqual and assign its value to be a comparison of favNum and favNumString with the strictly equal operator.


//Uncomment below to check your work
// console.log(smallNum); // 5
// console.log(bigNum); // 10
// console.log(isBigger); // true
// console.log(typeof favNum === "number"); // true
// console.log(typeof favNumString === "string"); // true
// console.log(isLooselyEqual); // true
// console.log(isStrictlyEqual); // false

//Do not alter below this line
export const bundle = {
  smallNum: smallNum,
  bigNum: bigNum,
  isBigger: isBigger,
  favNum: favNum,
  favNumString: favNumString,
  isLooselyEqual: isLooselyEqual,
  isStrictlyEqual: isStrictlyEqual,
};
