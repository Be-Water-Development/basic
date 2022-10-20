// Write a function that takes in parameter that will act as a max (limit) and generates a number 
// between 0 and that number

////

// Write a function that takes in a parameter called numberOfSlots and returns a function.
// Wrapped in the closure that this function creates will be two vars - an array (array) and spins (int).
// The inner function returned from said function will accomplish a few things:
// 1. It should utilize your random number generating function to generate a random number between 0 
//    and the numberOfSlots
// 2. It needs to loop (somewhat indefinitely), until each number between 0 and the numberOfSlots is randomly generated atleast one...
//    think the roulette table... and pushed to the array in the closure. There will be no duplicates in the array.
// 3. We want to keep track of the number of invocations of the random number generation function (aka how many spins) it takes
//    To eventually hit every number between 0 and the numberOfSlots once. 
// 4. This inner function should return an object with two keys: arr -- whose value is the array with every number between
//    0 and numberOfSlots with no duplicates, and spins: the number of spins it took to hit each number once. 

