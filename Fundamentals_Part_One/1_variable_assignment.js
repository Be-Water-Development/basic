//NOTE: Please read the file Variables_and_Constants before completing this challenge.

// Directions:
// create three types variables:
// a var, a let and const
// the var will be a number whose number is ten
// the let will be an array with three elements
// the const will be an object with two keys; num and arr
// the first key's value will be your created var variable
// the second key's value will be your array

var number = 10;

let array = [true, 7, "dog"];

const object = {
    "num": number,
    "arr": array,
};

const objectTest = {
    num: number,
    arr: array,
};

console.log(number)
console.log(array)
console.log(object)
console.log(object.num)
console.log(object.arr)
console.log(objectTest)

// Do not alter below this line
// export const bundle = { num: number, arr: array, obj: object };
