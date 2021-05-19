// Challenge

// Create a function called runAtInterval that accepts the inputs callback, wait and limit. Both wait and limit will be millisecond values.
// runAtInterval should run the callback once every wait milliseconds up to the limit, and then stop. Look up setInterval to complete this challenge.

const runAtInterval = (callback, wait, limit) => {
  let interval = setInterval(callback, wait);
  setTimeout(() => clearInterval(interval), limit);
};

// Uncomment below to check your work
runAtInterval(() => console.log("interval"), 100, 650); // should log "interval" once per 100ms, six times.

// Do not alter below this line
export const bundle = {
  runAtInterval: runAtInterval,
};
