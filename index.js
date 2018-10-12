// Add your doToElementsInArray() function here:
function doToElementsInArray(arr, cb) {
  arr.forEach(cb);
}

// Add your changeCompletely() function here:
function changeCompletely(ele, index, arr) {
  arr[index] = ele + '!';
}