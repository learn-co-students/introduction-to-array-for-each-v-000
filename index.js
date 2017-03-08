var evens = [0, 2, 4, 6, 8, 10];

evens.forEach(even => {
  console.log(`{evens} is not odd!`);
})

function square(n) {
  console.log(n * n);
}

evens.forEach(square);

function doToEvens(callback) {
  evens.forEach(callback);
  //now we can pass any function to doToEvens and that function
  //will be called on every element of evens
}


function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!';
}

var animals = ["dog", "fish", "cat"];

function doToElementsInArray(array, callback) {
  animals.forEach(changeCompletely);
  console.log(animals);
}

