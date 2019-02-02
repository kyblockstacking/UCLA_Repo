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
// SOLUTION - Quick Sort
// ================================================

function quickSort(items) {
  if (items.length <= 1) {
    return items;
  }

  // get random pivot element (and remove from array to add back in later)
  var pivot = items.splice(Math.floor(Math.random() * items.length), 1);

  // create left array (elements <= pivot), and right array (elements > pivot)
  var left = [];
  var right = [];

  // loop through array and create left/right
  items.forEach(function(el) {
    if (el <= pivot) {
      left.push(el);
    }
    else {
      right.push(el);
    }
  });

  // get the result of recursively sorting the left array (using quicksort), then join that with the pivot and the
  // result of recursively sorting the right array (using quicksort).
  // equivalent of `return quicksort(left) + pivot + quicksort (right);` in the pseudocode
  return quickSort(left).concat(pivot, quickSort(right));
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(quickSort(array).join(" "));