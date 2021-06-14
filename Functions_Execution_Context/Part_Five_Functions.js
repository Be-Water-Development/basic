// Challenge

// Create a function sumOfOddThings which takes two arrays as arguments. sumOfOddThings should add the sum of all the odd numbers in array2 to each odd number in array1.
// Similarly, sumOfOddThings should also add the sum of all the odd numbers in array1 to each odd numbers in array2. The return value should be two nested subarrays,
// the first subarray containing the modified array1 elements, the second containing the modified array2 elements. In addition, if any number in array2 is greater than 10,
// muliple each number in array1 by 10.

const sumOfOddThings = (arr1, arr2) => {
  let sumArr1 = 0;
  let sumArr2 = 0;

  arr1.forEach((ele, index) => {
    if (ele % 2 === 1) {
      sumArr1 += ele;
    }
    if (arr2[index] % 2 === 1) {
      sumArr2 += arr2[index];
    }
  });

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 1) {
      arr1[i] += sumArr2;
    }
    if (arr2[i] % 2 === 1) {
      arr2[i] += sumArr1;
    }
    if (Math.max(...arr2) > 10) {
      arr1[i] *= 10;
    }
  }
  return [arr1, arr2];
};

// Uncomment below to check your work
// console.log(typeof sumOfOddThings);
// console.log(sumOfOddThings([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])); // [ [ 17, 2, 19, 4, 21 ], [ 6, 16, 8, 18, 10 ] ]
// console.log(sumOfOddThings([2, 3, 7, 8], [10, 13, 2, 1])); // [ [ 20, 170, 210, 80 ], [ 10, 23, 2, 11 ] ]

// Challenge continued

// Create a function removeVowels with a string input, and returns a new string with all vowels removed.

const removeVowels = (string) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i].toLowerCase())) {
      result += string[i];
    }
  }
  return result;
};

// Uncomment below to check your work
// console.log(typeof removeVowels); // function
// console.log(removeVowels("MT BACHELOR")); // MT BCHLR
// console.log(removeVowels("Multnomah Falls")); // Mltnmh Flls
// console.log(removeVowels("Mount Thielsen")); // Mnt Thlsn

// Challenge continued

// Create a function addPear that accepts an object with fruit being the key, and fruit color being the value.
// Add the key “pear” with the value “green” to the object and returns the mutated object.

const addPear = (obj) => {
  obj["pear"] = "green";
  return obj;
};

// Uncomment below to check your work
// const fruits = { strawberry: "red", blueberry: "blue", banana: "yellow" };
// console.log(typeof addPear) // function
// console.log(addPear(fruits)); // {strawberry: 'red', blueberry: 'blue', banana: 'yellow', pear: 'green'}

// Challenge continued

// Create a function whereInTheWorld that accepts an object and returns the value paired with the key 'Carmen'.
// If the key 'Carmen' is not found, return the string 'Where in the world is Carmen Sandiego?'

const whereInTheWorld = (obj) => {
  let result;
  for (let key in obj) {
    if (key === "Carmen") {
      result = obj[key];
    }
    if (key !== "Carmen") {
      result = "Where in the world is Carmen Sandiego?";
    }
  }
  return result;
};

// Uncomment below to check your work
// const places = {
//   London: "England",
//   Barcelona: "Spain",
//   Moscow: "Russia",
//   Carmen: "Sandiego",
// };
// const people = { Elvis: "Presley", Steven: "Spielburg", Elizabeth: "Taylor" };
// console.log(typeof whereInTheWorld) // function
// console.log(whereInTheWorld(places)); // Sandiego
// console.log(whereInTheWorld(people)); // Where in the world is Carmen Sandiego?

// Challenge continued

// Create a function buildArray that accepts an object. The object will hold a count as a value, with a label as a string.
// buildArray should return an array with the key repeated count number of times. Keys should be grouped together in the return array.

const buildArray = (obj) => {
  let outArr = [];
  for (let key in obj) {
    for (let i = 0; i < obj[key]; i++) {
      outArr.push(key);
    }
  }
  return outArr;
};

// Uncomment below to check your work
// console.log(typeof buildArray); // function
// console.log(buildArray({ turkey: 3, gobble: 2 })); // [ 'turkey', 'turkey', 'turkey', 'gobble', 'gobble' ]
// console.log(buildArray({})); // []

// Challenge continued

// Create a function endOfUnit that returns the string “Congrats, you completed the functions unit!”. Now, convert this function to an anonymous function expression
// and assign it to a variable called theEnd. An invocation of theEnd should return the return value from endOfUnit.

const theEnd = function endOfUnit() {
  return "Congrats, you completed the functions unit!";
};

// Uncomment below to check your work
// console.log(typeof theEnd); // function
// console.log(theEnd()); // Congrats, you completed the functions unit!

// Do not alter below this line
export const bundle = {
  sumOfOddThings: sumOfOddThings,
  removeVowels: removeVowels,
  addPear: addPear,
  whereInTheWorld: whereInTheWorld,
  buildArray: buildArray,
  theEnd: theEnd,
};
