function changeCompletely(element, index, array) {
  return array[index] = element + '!!!'
}

function doToElementsInArray(array, callback) {
  return array.forEach(callback)
}

