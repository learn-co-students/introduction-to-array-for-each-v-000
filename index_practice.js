var evens = [0, 2, 4, 6, 8, 10];
var fruits = ['apple', 'pear', 'grape'];
var meals = ['breakfast', 'lunch', 'dinner'];
var tools = ['wrench', 'hammer', 'screwdriver'];
var pets = ["dog", "fish", "cat"];
var myArrays = fruits.concat(meals.concat(tools.concat(pets)));
 

processWords(myArrays, caps);

// doToEvens(addSalt);

threeThings(word, index, myArrays);


function oneThing(item) {
  return item + 42;
}

function twoThings(array, callback) {
  array.forEach(callback);
}

function threeThings(unit, index, array) {
  array[index] = (Math.random(1,100)*100).toString() + '!!!';
}



function processWords(array, callback) {
  array.forEach(callback);
}

function doToEvens(callback) {
  evens.forEach(callback);
}

function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

// evens.forEach((george, index, blurf) => {
//   let asdf = blurf[index];
//   console.log(`${george} is not odd! and I want ${asdf} peanuts.`); 
// });

function addSalt(num) {
console.log(num +"salt, is too much salt!");
}

function caps(word) {
  console.log(word.toUpperCase());
}

