 function changeCompletely(el, index, arr) {
   arr[index] = (Math.random() * 100).toString() + '!!!';
 }

 function doToElementsInArray(arr, callback) {
   arr.forEach(callback)
 }
