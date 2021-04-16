// Challenge

// Using a for loop, create a function sumMe that adds each element in the array to the variable sum to find the total of all array elements.
// Sum should be returned from the function.

const sumMe = (array) => {
  let sum = 0;
  array.forEach((ele) => {
    sum += ele;
  });
  return sum;
};

// Uncomment below to check your work
// console.log(typeof sumMe) // function
// console.log(sumMe([1, 7, 7, 10])); // 25
// console.log(sumMe([2, 7, 18, 22])); // 49

// Challenge continued

// Create a function multiplyMe that takes an unknown number of numbers as arguments, multiplies them all together, and returns the result.
// Hint: check out the spread operator.

const multiplyMe = (...nums) => {
  let result = 1;
  nums.forEach((ele) => {
    result *= ele;
  });
  return result;
};

// Uncomment below to check your work
// console.log(typeof multiplyMe) // function
// console.log(multiplyMe(1, 8, 4, 5, 6)); // 960
// console.log(multiplyMe(10, 2, 6, 8, 9, 15, 22, 7)); // 19958400

// Challenge continued

// Create a function sumArrays that accepts two separate arrays as parameters. sumArrays adds each element in arrayOne to the element at the same index in arrayTwo.
// sumArrays should return the new array.

const sumArrays = (arr1, arr2) => {
  let sum = [];
  arr1.forEach((ele, index) => {
    sum.push(ele + arr2[index]);
  });
  return sum;
};

// Uncomment below to check your work
// console.log(typeof sumArrays); // function
// console.log(sumArrays([1, 2, 3, 4], [10, 2, 7, 8])); // [ 11, 4, 10, 12 ]
// console.log(sumArrays([7, 2, 3, 6, 3], [1, 15, 9, 8, 7])); // [ 8, 17, 12, 14, 10 ]

// Challenge continued

// Create a function sumOfElevens that takes in two arrays as parameters. This function will return a new array replacing the elements in array1
// if the sum of array1 and array2 at the same index is equal to 11. If the sum is equal to 11, the string “eleven” should be pushed into the
// array in place of the array1 element. Otherwise, push the array1 element.

const sumOfElevens = (arr1, arr2) => {
  let result = [];
  arr1.forEach((ele, index) => {
    if (ele + arr2[index] === 11) {
      return result.push("eleven");
    }
    result.push(ele);
  });
  return result;
};

// Uncomment below to check your work
// console.log(typeof sumOfElevens); // function
// console.log(sumOfElevens([1, 4, 3, 5, 3, 2], [2, 7, 2, 6, 2, 3])); // [ 1, 'eleven', 3, 'eleven', 3, 2 ]
// console.log(sumOfElevens([2, 3, 5, 10, 2, 0], [9, 4, 5, 6, 2, 11])); // [ 'eleven', 3, 5, 10, 2, 'eleven' ]

// Challenge continued

// Using a while loop, create a function countFromTen which accepts the parameter x. countFromTen will count down from x to 0 and push each number into a result array.
// When the count down reaches 7, push the string ‘seven’ right after the number 7. When the count down reaches 3, push the string ‘three’ right after the number three.
// When the count down reaches 0, push the string ‘zero’ right after the number 0.
// Return the result array from the function.

const countFromTen = (x) => {
  let result = [];

  while (x >= 0) {
    result.push(x);
    if (x === 7) {
      result.push("seven");
    }
    if (x === 3) {
      result.push("three");
    }
    if (x === 0) {
      result.push("zero");
    }
    x--;
  }
  return result;
};

// Uncomment below to check your work
// console.log(typeof countFromTen); // function
// console.log(countFromTen(10)); // [10, 9, 8, 7, 'seven', 6, 5, 4, 3, 'three', 2, 1, 0, 'zero']

// Challenge continued

// Complete the function pickANumber that takes two player inputs as number arguments between 1 and 100. The function will return 'Player 1 wins!' or 'Player 2 wins'
// depending on which input is closest to the random number. Check out Math.abs() to determine who is closest to the random number.

function pickANumber(player1, player2) {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(`If the random number is ${randomNumber}...`);
  // Add code here
  if (Math.abs(player1 - randomNumber) < Math.abs(player2 - randomNumber)) {
    return "Player 1 wins!";
  }
  if (Math.abs(player2 - randomNumber) < Math.abs(player1 - randomNumber)) {
    return "Player 2 wins!";
  }
}

// Uncomment below to check your work
// console.log(pickANumber(22, 63)); // If the random number is (random number)... Player (unknown till function runs) wins!

// Challenge continued

// Create a function findTheRange that finds the range(difference between highest and lowest number) of the argument array.
// The return value should be an array with the lowest number, highest number, and the range. Check out the sort() method to solve this challenge.

const findTheRange = (arr) => {
  let result = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[0]);
    result.push(arr[arr.length - 1]);
    result.push(Math.abs(arr[0] - arr[arr.length - 1]));
    return result;
  }
};

// Uncomment below to check your work
// console.log(typeof findTheRange); // function
// console.log(findTheRange([7, 18, 3, 5, 9, 10])); // [ 3, 18, 15 ]
// console.log(findTheRange([5, 22, 6, 9, 8, 1, 4])); // [ 1, 22, 21 ]

// Do not alter below this line
export const bundle = {
  sumMe: sumMe,
  multiplyMe: multiplyMe,
  sumArrays: sumArrays,
  sumOfElevens: sumOfElevens,
  countFromTen: countFromTen,
  pickANumber: pickANumber,
  findTheRange: findTheRange,
};
