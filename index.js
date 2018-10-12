// Add your doToElementsInArray() function here:
var doToElementsInArray = (array, callback) => {
  array.forEach(callback);
}

// Add your changeCompletely() function here:
var changeCompletely = (element, index, array) => {
  array[index] = element + " is element # "+index;  
}