var evens = [0, 2, 4, 6, 8, 10]

function doToEvens(callback) {
  evens.forEach(callback)
}


function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

var animals = ["dog", "fish", "cat"]

doToElementsInArray(animals, changeCompletely)

console.log(animals)
