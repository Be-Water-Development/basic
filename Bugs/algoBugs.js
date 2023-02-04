// Write a function 'neither' that  takes in an array and two callbacks and 
// returns a subset array in which all the items remaining returned false for BOTH callbacks
// There are bugs throughout this code. You can change the callbacks or the neither function -
// whatever it takes to achieve the desired output below. Do not change the inputs. 

const firstCallback = (el) => {
  return el.length > 1
}


const secondCallback = (el) => {
  return typeof el === 'object'
}

const niether = (arr, cbOne, cbTwo) => {
  return arr.map(el => 'string').filter(el => {
    return !cbOne(el) && cbTwo(el)
  })
}

const arr = [[1, 2, 3], [], undefined, 'false', false, [2]]
console.log(niether(arr, firstCallback, secondCallback)) // Change the code to achieve this -->  [undefined, false] ; without changing `arr` 