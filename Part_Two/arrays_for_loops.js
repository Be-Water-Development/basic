// Arrays for loops

// Javascript has some handy tools that let you execute a block of code over and over again, each time with a different value.

// Take this code for example. If you wanted to make each item on this list plural, you could take each item, add an “s”,
// then repeat that code till you’ve altered all the items.

const list = ["cat", "dog", "frog", "bear"];
list[0] += "s";
list[1] += "s";
list[2] += "s";
list[3] += "s";

// console.log(list); //[ 'cats', 'dogs', 'frogs', 'bears' ]

// This does work, but imagine if your list had 1000s of items, that would be a ton of code, and it would break the Do Not Repeat Yourself or DRY principle in programming.
// This is where for loops come in, they can loop over an array, perform an operation, and then exit the loop when all of the items have been modified. Here is an example:

const anotherList = ["tiger", "snail", "bird", "slug"];

for (let i = 0; i < anotherList.length; i++) {
  anotherList[i] += "s";
}

// console.log(anotherList); //[ 'tigers', 'snails', 'birds', 'slugs' ]

// There is a lot going on in this for loop, so let's break it down piece by piece.

// The for keyword tells Javascript we are going to execute a loop. After the for keyword, we include parentheses that wrap around three conditions, each separated by a semicolon.

// The first condition, let i = 0, is the initial expression. In our example above, we are initializing a variable that is a counter for how many times the loop should iterate.
// Since we started our count at 0, our counter variable will also match up with our indexes. So with square bracket notation,
// we are able to access each anotherList item with anotherList[i].

// The second condition, i < anotherList.length, is the conditional expression. This utilizes a comparison operator that will evaluate to true or false on each iteration.
// In our example above, when the condition is false, the loop will end. We are telling the loop to keep executing as long as i is less than the length of the list.

// The third condition, i++, is the increment expression. This utilizes the increment operator to increase the counter variable i by 1 on each iteration.
// It will be executed after the code in the for loop is run.

// For loops can be difficult to understand at first, it can be helpful to watch what each moving part is doing on each loop.
// Take this example and pay attention to what each console.log is logging on each loop in your console. Please uncomment the console logs before running.

const fruits = ["apple", "pear", "banana", "kiwi", "apricot"];

for (let i = 0; i < fruits.length; i++) {
  fruits[i] += "s";
  // console.log("This is our conter variable:", i);
  // console.log("This is our conditional expression:", i < fruits.length);
  // console.log("This is our updated fruit:", fruits[i]);
  // console.log(
  //   "If the conditional expression is true, the loop will increment i by 1, and run again, if false, it exits the loop"
  // );
}
// console.log("When this prints, the loop is over:", fruits);

// Challenge

// Using a for loop, loop over the nums array, multiplying each number by 11 on each iteration.
// Add code here

const nums = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < nums.length; i++) {
  nums[i] *= 11;
}

// Challenge continued

const weather = ["raining", "sunny", "stormy", "hailing"];
const weatherUpdate = [];

// Iterate over the weather array using a for loop, pushing a string with the format "It is [weather] outside" into the weatherUpdate array.
// Add code here

for (let i = 0; i < weather.length; i++) {
  weatherUpdate.push(`It is ${weather[i]} outside`);
}

//Challenge continued

const park = ["Glacier", "Yellowstone", "Yosemite"];
const location = ["Montana", "Wyoming", "California"];
const attraction = [
  "700 miles of hiking trails",
  "hot springs and geysers",
  "El Capitan and Half Dome",
];

const nationalParks = [];

//Each array above(park, location and attraction) correspond to eachother at a certain index. Loop through the arrays and push a string into nationalParks so that
//nationalParks returns the following:
// [
//   'Glacier National Park is in Montana and attractions are 700 miles of hiking trails',
//   'Yellowstone National Park is in Wyoming and attractions are hot springs and geysers',
//   'Yosemite National Park is in California and attractions are El Capitan and Half Dome'
// ]

//Add code here
for (let i = 0; i < park.length; i++) {
  nationalParks.push(
    `${park[i]} National Park is in ${location[i]} and attractions are ${attraction[i]}`
  );
}

//Uncomment below to check your answers
// console.log(nums); // [ 11, 22, 33, 44, 55, 66 ]
// console.log(weatherUpdate); //['It is raining outside', 'It is sunny outside', 'It is stormy outside', 'It is hailing outside' ]
// console.log(nationalParks); // ["Glacier National Park is in Montana and attractions are 700 miles of hiking trails", "Yellowstone National Park is in Wyoming and attractions are hot springs and geysers", "Yosemite National Park is in California and attractions are El Capitan and Half Dome"];

//Do not alter below this line
export const bundle = {
  nums: nums,
  weatherUpdate: weatherUpdate,
  nationalParks: nationalParks,
};
