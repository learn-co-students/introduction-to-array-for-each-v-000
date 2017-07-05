// Add your doToElementsInArray() function here:


var doToElementsInArray = function(array, callback){
    array.forEach(callback);
  }

// Add your changeCompletely() function here:

function changeCompletely(element, index, array){
    array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}
