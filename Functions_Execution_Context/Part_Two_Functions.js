// Challenge

// Examine the code below. Add the arguments to func1 and func2 to have both functions return the value true.

const y = 6;

function func1(num) {
  const y = 4;
  return num === y;
}

function func2(num) {
  return num === y;
}

const one = func1(4); // Add argument here
const two = func2(6); // Add argument here

// Uncomment below to check your work
// console.log(one); // true
// console.log(two); // true

// Challenge continued

// Examine the code below. Make the dwight variable equal to "BearsBeetsBattlestarGalactica" with a single invocation to the function bears.

let dwight = "";

function bears(string) {
  // Add code here
  string += "Bears";
  return beets(string);
}

function beets(string) {
  // Add code here
  string += "Beets";
  return battlestar(string);
}

function battlestar(string) {
  // Add code here
  string += "Battlestar";
  return galactica(string);
}

function galactica(string) {
  // Add code here
  return (string += "Galactica");
}

dwight = bears(dwight);

// Uncomment below to check your work
// console.log(dwight); // BearsBeetsBattlestarGalactica

// Challenge continued

// Add code to the function orderFood so that it calls the function callRestaurant with the arguments restaurantOpen and the string food. The function callRestaurant
// accepts a boolean and a string. If the boolean value is true, return the string 'Lets order (food)', if the boolean value is false, return the string "Restaurant is closed"

let restaurantOpen = true;

function orderFood(food) {
  // Add code here
  return callRestaurant(restaurantOpen, food);
}

function callRestaurant(bool, string) {
  // Add code here
  if (bool) {
    return `Lets order ${string}`;
  }
  if (!bool) {
    return `Restaurant is closed`;
  }
}

// Uncomment below to check your work
// console.log(orderFood("Thai")); // Lets order Thai
// restaurantOpen = false;
// console.log(orderFood("Burgers")); // Restaurant is closed

// Challenge continued

// Create a function isEven, and return true if the number is even, and false if the number is odd.

const isEven = (num) => (num % 2 === 0 ? true : false);

// Uncomment below to check your work
// console.log(isEven(8)); // true
// console.log(isEven(7)); // false

// Challenge continued

// Create a function findRemainder that accepts two numbers, and returns the remainder of dividing the larger number by the smaller number. You must include a
// guard clause that determines what number is the bigger number.

const findRemainder = (num1, num2) => (num1 > num2 ? num1 % num2 : num2 % num1);

// Uncomment below to check your work
// console.log(findRemainder(15, 5)); // 0
// console.log(findRemainder(100, 13)); // 9
// console.log(findRemainder(10, 77)); // 7
// console.log(findRemainder(4, 66)); // 2

// Do not alter below this line
export const bundle = {
  one: one,
  two: two,
  dwight: dwight,
  bears: bears,
  orderFood: orderFood,
  restaurantOpen: restaurantOpen,
  callRestaurant: callRestaurant,
  isEven: isEven,
  findRemainder: findRemainder,
};
