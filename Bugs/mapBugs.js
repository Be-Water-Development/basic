// This is a recreation of .map() and .forEach()
// but there are bugs. Fix the bugs so the output is correct.
​
const addS = (element) => {
  return el + 's'
}
​
const forEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i+=2) {
    callback(arr[i]);
  }
};
​
const map2 = (arr, callback) => {
  const changedArr = [];
​
  forEach(arr, (e) => {
    changedArr.push(callback(e));
  });
​
  return changedArr;
};
​
const set = ['dog', 'cat', 'pig'];
const newSet = map2 // ['dogs', 'cats', 'pigs']