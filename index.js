// Add your doToElementsInArray() function here:
  function doToElementsInArray(array,callback){
    array.forEach(callback);
  }

// Add your changeCompletely() function here:

function changeCompletely(animal,index,array){
  array[index] = array[index].toUpperCase();
}
