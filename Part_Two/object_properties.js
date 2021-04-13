// Objects

// While everything in Javascript is inherently an object, there are also Javascript objects. Objects are composed of key: value pairs that correspond to one another.
// The keys, or properties, are a way to reference the stored value, and are always strings. The values can be any valid data type.
// Here is an example:

const myObject = {
  animal: "cat",
  number: 4,
  boolean: true,
  manyObjs: { a: 1, b: 2, c: 3 },
  arrayInObj: ["arrays", "can", "live", "in", "objects", "too"],
};

// Objects can store many different types of values, while the key is always a string. We have a few ways we can iterate over objects in Javascript, similar to for loops.

// Let's say you wanted to iterate over the values of an object to search for a specific value. You could use a for loop, but if you tried this you’d get the error “Object is not iterable”.
// This error is because for loops are for arrays, not objects. But what if you could convert an object's values into an array to iterate over?

// Object.keys() and Object.values() are object methods that convert the keys or values into an array, that then can be iterated over with a for loop.
// Here is an example:

const myPets = { Dog: "rowdy", Cat: "muffin", Bird: "tweety", Fish: "jaws" };

// Uncomment the code below

// console.log(Object.keys(myPets)); // [ 'Dog', 'Cat', 'Bird', 'Fish' ]
// console.log(Object.values(myPets)); // [ 'rowdy', 'muffin', 'tweety', 'jaws' ]

// for (let i = 0; i < Object.values(myPets).length; i++) {
//   console.log(Object.values(myPets)[i].toUpperCase());
// }

// The for loop returns:
// ROWDY
// MUFFIN
// TWEETY
// JAWS

//You can also store the Object.keys(or values) in a variable, then iterate over that newly created variable.

const myPetsKeys = Object.keys(myPets);

// Uncomment the code below

// console.log(myPetsKeys); // [ 'Dog', 'Cat', 'Bird', 'Fish' ]

// for (let i = 0; i < myPetsKeys.length; i++) {
//   console.log(myPetsKeys[i].toLowerCase());
// }

//the for loop returns:
// dog
// cat
// bird
// fish

// Another way to iterate over an object is with a for... in loop. A for... in loop loops through the properties(keys) of an object.
// Here is an example:

const myShoppingList = {
  item1: "avocaods",
  item2: "bread",
  item3: "milk",
};

// Uncomment the code below

// for (let property in myShoppingList) {
//   console.log("property is the key:", property);
//   console.log(
//     "myShoppingList[property] is the value:",
//     myShoppingList[property]
//   );
// }

//The above for... in loop returns:
// property is the key: item1
// myShoppingList[property] is the value: avocaods
// property is the key: item2
// myShoppingList[property] is the value: bread
// property is the key: item3
// myShoppingList[property] is the value: milk

// The variable property updates on each iteration, and square bracket notation provides access to the value for that property.

// Challenge

let items = {
  item1: "pickaxe",
  item2: "firewood",
  item3: "marshmallows",
  foundItem: "flashlight",
};
let found = false;

// Using a for.. in loop, determine if the items object contains the property "foundItem". If that property is found, reassign the value of found to true.
// Add code here

for (let property in items) {
  if (property === "foundItem") {
    found = true;
  }
}

// Challenge continued

let objOfNums = { number: 22, anotherNumber: 5, numberAgain: 16, oneMore: 9 };
let greaterThanFive = [];

// Using a for.. in loop, iterate over objOfNums, if the value is greater than five, push that number into the greaterThanFiveArray.
// Add code here

for (let property in objOfNums) {
  if (objOfNums[property] > 5) {
    greaterThanFive.push(objOfNums[property]);
  }
}

// Challenge continued

const people = { joe: 17, taylor: 25, ben: 66, angie: 42 };
let ageByFive;

// Declare a variable ages, and assign it the value of the Object.values() of people. Using a for loop, iterate over the ages array and determine if any of the participants ages are divisible by 5.
// If any of the ages are divisible by 5, assign the variable ageByFive to true.
// Add code here

const ages = Object.values(people);

for (let i = 0; i < ages.length; i++) {
  if (ages[i] % 5 === 0) {
    ageByFive = true;
  }
}

// Uncomment below to check your answers
// console.log(found); // true
// console.log(greaterThanFive); // [ 22, 16, 9 ]
// console.log(ages); // [ 17, 25, 66, 42 ]
// console.log(ageByFive); // true

// Do not alter below this line
export const bundle = {
  found: found,
  greaterThanFive: greaterThanFive,
  ages: ages,
  ageByFive: ageByFive,
};
