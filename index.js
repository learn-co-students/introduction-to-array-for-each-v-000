/* 
1. Declare a function named doToElementsInArray.
2. Function accepts parameter named array, callback, whose value is array, callback.
3. When call function, execute callback.
*/
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

/* 
1. Declare a function named changeCompletely.
2. Function accepts parameter named element, index, array, whose value is element, index, array.
3. When call function, execute callback to change array.
*/
function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}
