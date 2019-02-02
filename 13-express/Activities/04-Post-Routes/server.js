// include the express module
var express = require("express");

// create a new express app
var app = express();

// define the port that we will set the server listener on
var PORT = 3000;

// any time a POST request is made to localhost:3000/, we can capture it here
app.post("/", function(req, res) {
	console.log("Knock, knock.");

	// POST requests should still send a response back
	res.send("Who's there?");
});

// note that a POST request can wield different results than a GET, even on the same route
app.get("/", function(req, res) {
	res.send("Orange");
});

// start server on that port number
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});