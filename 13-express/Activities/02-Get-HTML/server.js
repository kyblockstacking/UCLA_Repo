// include the express module
var express = require("express");

// create a new express app
var app = express();

// define the port that we will set the server listener on
var PORT = 3000;

// define what to display when the client requests http://localhost:3000/
app.get("/", function(req, res) {
	// we use __dirname, because express requires us to provide an absolute path
	res.sendFile(__dirname + "/index.html");
});

// define what to display when the client requests http://localhost:3000/food
// note that the route name doesn't have to include ".html" -- in fact, it can be whatever we want
app.get("/food", function(req, res) {
	res.sendFile(__dirname + "/food.html");
});

// define what to display when the client requests http://localhost:3000/movies
app.get("/movies", function(req, res) {
	res.sendFile(__dirname + "/movies.html");
});

// start server on that port number
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});