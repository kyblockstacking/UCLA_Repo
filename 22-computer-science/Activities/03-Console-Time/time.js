// make array of random numbers
var arraySize = 50000;
var array = [];

for (var i = 0; i < arraySize; i++) {
	array.push(Math.round(Math.random() * arraySize));
}

// random value to find
var findMe = array[Math.ceil(Math.random() * arraySize)];

// benchmark regular search
console.time("regular");

for (let i = 0; i < array.length; i++) {
	if (findMe === array[i]) {
  		console.log("found it");
  }
}

console.timeEnd("regular");

// benchmark search that uses a "for in" loop
console.time("for-in");

for (let i in array) {
	if (findMe === array[i]) {
	  	console.log("found it");
  }
}

console.timeEnd("for-in");

// benchmark search that breaks on match
console.time("for-break");

for (let i = 0; i < array.length; i++) {
	if (findMe === array[i]) {
	  	console.log("found it");

	  	// we found it, so don't need to keep looking
	    break;
  }
}

console.timeEnd("for-break");