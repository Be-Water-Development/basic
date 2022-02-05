// Arrays

// An array is a variable that can hold more than one value at a time. They are created with square brackets [] that wrap the list of items in the array,
// with each item separated by a comma.
// Here is an example:

// const states = ["Washington", "Oregon", "California"];

// console.log(Array.isArray(states)); // true
// console.log(typeof states); // object
// console.log(states[1]); // Oregon

// Arrays operate with a zero-based index system, each element has it's own index so "Washington" would have an index of 0, "Oregon" would have an index of 1, and so on.
// So like strings, you can access elements of the array with its index using square bracket notation.
// However, unlike strings, arrays are mutable and values can be reassigned with bracket notation. Here is an example:

// const veggies = ["carrots", "beets", "kale", "broccoli"];
// veggies[2] = "onion";
// console.log(veggies); // [carrots, beets, onion, broccoli]

// You can utilize the built in .length property for arrays, this returns the length of the array. Here is an example:

// const fruits = ["orange", "apple", "strawberry"];
// console.log(fruits.length); // 3

// Arrays also come with built in methods, you can view a list of them here: https://www.w3schools.com/js/js_array_methods.asp
// Two common scenarios when dealing with arrays is adding or removing an item. The push method adds an item to the end of an array,
// while the pop method removes an item from the end of an array. Here are some examples:

// let colors = ["blue", "yellow", "red", "green"];
// colors.push("orange");
// console.log(colors); // [blue, yellow, red, green, orange]

// colors.pop();
// console.log(colors); // [blue, yellow, red, green]

// Challenge

// Declare an array of cities, containing the cities "Portland", "Seattle", "Berkeley", "Reno", "Bend".
// Reassign the value of "Berkeley" to "San Francisco" using square bracket notation.
// Declare a variable citiesLength, and assign it the value of the length of the cities array.
// Add code here


// Uncomment below to check your answers
// console.log(Array.isArray(cities)); // true
// console.log(cities[2]); // San Francisco
// console.log(citiesLength); // 5

// Challenge continued

const nums = [1, 2, 3, 4, 5, 6];

// Using the push method, add the number 7 to the nums array.
// Add code here



// Uncomment below to check your answers
// console.log(nums); // [1, 2, 3, 4, 5, 6, 7]

// Challenge continued

const moreNums = [11, 22, 33, 44, 55];

// Using the pop method, remove the last item of the moreNums array.
// Add code here



// Uncomment below to check your answers
// console.log(moreNums); // [11, 22, 33, 44]
