// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Bubble Sort
// ================================================

function bubbleSort(arr) {
  // sorted acts as a flag to let us know if our array has been completely sorted
  var sorted = false;

  while (!sorted) {
    sorted = true;
    // Loop through the array
    for (var i = 0; i < arr.length; i++) {
      // If the current element is larger than the next element, swap them and set sorted to `false`
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  // If we looped through the array without having to swap anything, exit the while loop and return the array
  return arr;
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(bubbleSort(array).join(" "));