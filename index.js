function changeCompletely(element, index, array) {
  array[index] = "Something completely different."
}

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}
