// Challenge

// Create a function mapMe that accepts an array and returns a new array.
// The new array should contain all elements from the input array converted to uppercase.
// Utilize the built in map method to complete this challenge.

const mapMe = (array) => {
  return array.map((ele) => {
    return ele.toUpperCase();
  });
};

// Uncomment below to check your work
// console.log(typeof mapMe); // function
// console.log(mapMe(["Nile", "Yangtze", "Ganges", "Orinoco"])); // [ 'NILE', 'YANGTZE', 'GANGES', 'ORINOCO' ]

// Challenge continued

// In this challenge, we are going to recreate the built in array method reduce. Reduce takes in an array and reduces the array elements to a single value.

// Reduce iterates over the array and performs any operation that can be applied inside a function to each array element while keeping track of each iteration's
// outcome with an accumulator value. Reduce takes four arguments:

// 1. Accumulator value. The accumulator keeps track of the output for each iteration. It starts out equal to the initial value.
// 2. Current value. The current value is the current element that is being iterated over in the loop.
// 3. Current index.
// 4. The original array.

// To get a better idea of how reduce works, read up on the documentation here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// Create your own reduce function that accepts an array, a callback and an initial value and returns a single value. Do not use the build in reduce method, as we are recreating
// it with this challenge. You should also include a guard clause that makes sure the array passed in is indeed an array, if the array passed in is not array, return the string
// "this function requires an array as input"

const reduce = (arr, cb, initialValue) => {
  if (Array.isArray(arr)) {
    let acc;
    if (initialValue === undefined) {
      acc = arr[0];
      arr = arr.slice(1);
    }
    if (initialValue !== undefined) {
      acc = initialValue;
    }

    arr.forEach((ele) => {
      acc = cb(acc, ele);
    });
    return acc;
  }
  return "this function requires an array as input";
};

// Uncomment below to check your work
// const nums = [1, 2, 3, 4];
// const add = (num1, num2) => num1 + num2;
// console.log(typeof reduce); // function
// console.log(reduce(nums, add, 0)); // 10
// console.log(reduce(nums, add)); // 10
// console.log(reduce({ cats: "dogs" }, add, 0)); // this function requires an array as input

// Challenge continued

// Create a function reduceMe that accepts an array and multiplies all array elements together. Use the built-in method reduce.

const reduceMe = (arr) => {
  return arr.reduce((acc, item) => {
    return (acc *= item);
  });
};

// Uncomment below to check your work
// console.log(typeof reduceMe);
// console.log(reduceMe([3, 2, 7, 4])); // 168

// Challenge continued

// Create a function crossRoads that compares input arrays and returns a new array with elements that appear in all of the input arrays.
// Use the built in method reduce to complete this challenge.

const crossRoads = (arrays) => {
  return arrays.reduce((acc, item) => {
    let result = [];
    item.forEach((ele) => {
      if (acc.includes(ele)) {
        result.push(ele);
      }
    });
    return result;
  });
};

// Uncomment below to check your work
// console.log(typeof crossRoads); // function
// console.log(
// crossRoads([
//   [1, 6, 3, 4, 5],
//   [7, 8, 4, 3, 7],
//   [10, 3, 22, 4, 9],
// ])
// ); // [ 3, 4 ]

// Challenge continued

// Create a function duplicates that takes an input of an array of arrays.
// Duplicates should flatten the arrays and remove any duplicate elements. Use the built- in method reduce.

const duplicates = (arrays) => {
  return arrays.flat(Infinity).reduce((acc, item) => {
    if (acc.includes(item)) {
      return acc;
    }
    return acc.concat(item);
  }, []);
};

// Uncomment below to check your work
// console.log(typeof duplicates); // function
// console.log(
//   duplicates([
//     [1, 33, 56, 8, 99, 100],
//     [33, 22, 100, 15, 8, 47],
//     [8, 15, 44, 22, 56, 87],
//   ])
// ); // [1, 33, 56, 8, 99, 100, 22, 15, 47, 44, 87]

// Do not alter below this line
export const bundle = {
  mapMe: mapMe,
  reduce: reduce,
  reduceMe: reduceMe,
  crossRoads: crossRoads,
  duplicates: duplicates,
};
