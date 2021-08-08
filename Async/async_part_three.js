// Challenge

// For this challenge, we are going to simulate an AJAX call to get information from a server. This is not a real AJAX call, but the asynchronicity is similar.

// Declare a let variable dataReceived, do not assign it to any value yet.

// Create a function ajaxSimulate that accepts an id and a callback. Inside that function, declare a database variable that is equal to the array ["Charlie", "Dee", "Mac"].
// Then, add a timer with setTimeout that will execute the callback after 0ms with the callback being passed the database array item at the id passed in.

// Create another separate function dataStore that takes data as an input and then assigns dataReceived(the variable that was created at the start of the challenge)
// to the value of data.

// Now, invoke ajaxSimulate with an id of 2 and the dataStore function as the callback. Then, console log the value of dataReceived.
// What do you think it will log?

// Without changing anything, copy and paste the console.log statement to the location where it will log the data we need to the console.

let dataReceived;

const ajaxSimulate;

const dataStore;

ajaxSimulate(2, dataStore);

// Do not alter below this line
export const bundle = {
  dataStore: dataStore,
  ajaxSimulate: ajaxSimulate,
};
