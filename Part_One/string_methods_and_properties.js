// String properties and methods

// Every data type in JavaScript comes with built in properties and methods that can uncover information or manipulate data stored inside a variable.
// A method is something that can change or alter the data, while a property is a named attribute of the data. A common example is that methods are verbs or actions,
// while properties are nouns.

// You can find a full list of all the available string properties and methods here: https://www.w3schools.com/jsref/jsref_obj_string.asp

// But wait! Before you get overwhelmed with all that information, let’s focus on a simple property called .length. Which, you guessed it, finds the length of a string.
// Here is an example:

// const myString = “Hello”
// console.log(myString.length) // => 5

// Pretty simple huh? You add .length to the end of your variable, and the length is returned.

// String methods are the actions that can be performed on objects in JavaScript. Remember, every data type in Javascript is inherently an object,
// and every data type comes with it’s own set of methods.

// Two common string methods are toUpperCase and toLowerCase. They are used similarly to the .length property, but since they are methods, they must be invoked by adding () to the end,
//  like a function. We will cover functions and invoking them more later, but for now, just remember to invoke your methods with (). Here is an example:

// const bestToast = “Avocado Toast”

// console.log(bestToast.toUpperCase()) // => “AVOCADO TOAST”
// console.log(bestToast.toLowerCase()) // => “avocado toast”

// Challenge

// Declare a variable count and set it’s value equal to the length property of the string variable soccerTeam.
// Declare a variable upper and set it’s value equal to the string soccerChant converted to uppercase letters.
// Declare a variable lower and set it’s value equal to the string soccerChant converted to lowercase letters.

let soccerTeam = "Portland Timbers";
let soccerChant = "Green is the Color";

let count = soccerTeam.length;
let upper = soccerChant.toUpperCase();
let lower = soccerChant.toLocaleLowerCase();

//Uncomment below to check your answers
//console.log(count); // 16
// console.log(upper); // "GREEN IS THE COLOR"
// console.log(lower); // "green is the color"

//Do not alter below this line
const bundle = { lengthCount: count, upperCase: upper, lowerCase: lower };
export { bundle };
