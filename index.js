function changeCompletely(element, index, array){
  for(var i=0; i<array.length; i++){
    console.log(`${evens[i]} is not odd!`)
  }
}

function changeCompletely(element, index, array){
  array.forEach((element, index, array) => {
    console.log(`${element} is not odd!`)
  })
}

function doToElementsInArray(array, callback){
  array.forEach(callback)
}
