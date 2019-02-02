// test object with one property
var obj = {name: "amy"};

// objects can be passed into functions
printMyName(obj);

// we can also pass in generic objects that haven't been assigned to a variable
printMyName({name: "allen"});

function printMyName(x) {
	// i know "x" will be an object, so i'll access its properties
	console.log("i can see " + x.name);
}

// test function that just console logs something
var funk = function() {
	console.log("i'm funky");
};

// like objects, you can give a function to another function
callMyFunction(funk);

// in this case, we're just going to pass in a generic function that hasn't been previously defined or named
callMyFunction(function() {
	console.log("i'm so generic");
});

function callMyFunction(x) {
	// i know "x" will be a function, so i'm gonna call it
	x();
}

// and that's a callback! callbacks are particularly useful when we need something to happen after an asynchronous call is made

// for example, let's call waitAMoment() and give it a callback that includes a placeholder argument
waitAMoment(function(thing) {
	console.log("i hope this " + thing + " was worth the wait");
});

function waitAMoment(callback) {
	setTimeout(function() {
		// our callback will happen after two seconds
		callback("potato");
	}, 2000);
}