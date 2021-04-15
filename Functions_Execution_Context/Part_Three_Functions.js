// Challenge

// Write a function sunshine that accepts the argument hour. Sunshine returns “Sun will rise soon” if the hour is before 6,
// “Sun is up” if the hour is before 19, and “Sun is setting” if the hour is 19 or after.

const sunshine = (hour) => {
  if (hour < 6) {
    return "Sun will rise soon";
  }
  if (hour >= 6 && hour < 19) {
    return "Sun is up";
  }
  return "Sun is setting";
};

// Uncomment below to check your work
// console.log(typeof sunshine); // function
// console.log(sunshine(4)); // Sun will rise soon
// console.log(sunshine(6)); // Sun is up
// console.log(sunshine(10)); // Sun is up
// console.log(sunshine(19)); // Sun is setting
// console.log(sunshine(24)); // Sun is setting

// Challenge continued

// Create a function getGrade that accepts a grade as an argument and returns the appropriate letter grade.
// Grades 90 and above should return "A"
// Grades 80 to 89 should return "B"
// Grades 70 to 79 should return "C"
// Grades 60 to 69 should return "D"
// Grades 59 and below should return "F"

const getGrade = (grade) => {
  if (grade >= 90) {
    return "A";
  }
  if (grade >= 80 && grade <= 89) {
    return "B";
  }
  if (grade >= 70 && grade <= 79) {
    return "C";
  }
  if (grade >= 60 && grade <= 69) {
    return "D";
  }
  if (grade <= 59) {
    return "F";
  }
};

// Uncomment below to check your work
// console.log(getGrade(96)); // A
// console.log(getGrade(80)); // B
// console.log(getGrade(74)); // C
// console.log(getGrade(66)); // D
// console.log(getGrade(55)); // F

// Challenge continued

// Complete the function treasure that accepts an array of strings and iterates over the array using a for loop. Update the result variable to “Treasure found!”
// if the array contains the string “treasure”. If no treasure is found, update the variable result to “Keep searching!” Return the updated result.

function treasure(array) {
  let result = "";
  // Add code here
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes("treasure")) {
      result = "Treasure found!";
    }
    if (!array[i].includes("treasure")) {
      result = "Keep searching!";
    }
  }
  return result;
}

// Uncomment below to check your work
// console.log(treasure(["turtles", "squid", "ship wreck", "whale", "treasure"])); // Treasure found!
// console.log(
//   treasure(["sand", "seal", "dolphin", "seasquatch", "kelp", "urchins"]) // Keep searching!
// );

// Do not alter below this line
export const bundle = {
  sunshine: sunshine,
  getGrade: getGrade,
  treasure: treasure,
};
