// This function is meant to strip the items in the arr that are of type number.
// If the element in the array is of type array then that array must be stripped of numbers as well
// However there are problems. Fix the problems.
​
const stripNumbers = (arr) => {
  return arr.filter(el => {
    if(typeof el === 'object') {
      return el.filter(a => {
        return typeof a === 'string'
      })
    } else {
      return el = 'string'
    }
  })
}
​
​
const justWords = stripNumbers(['hello', 'word', 5, 3, 66, [1,2,'false'], 'true', 99]) // ['hello', 'word', ['false'], 'true']
console.log(justWords)