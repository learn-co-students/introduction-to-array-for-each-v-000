/* "scripts": {
  "test": "mocha --timeout 5000 -R mocha-multi --reporter-options nyan=-,json=.results.json"
}, */
function changeCompletely(element, index, array) {
  array[index] = element + '!!!'
}

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}
