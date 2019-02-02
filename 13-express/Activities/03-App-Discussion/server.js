// include the express module
var express = require("express");

// create a new express app
var app = express();

// define the port that we will set the server listener on
var PORT = 3000;

// define what to display when the client requests http://localhost:3000/
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

// define what to display when the client requests http://localhost:3000/hello.html
app.get("/hello.html", function(req, res) {
	res.send("<h1>Hello World</h1>");
});

// start server on that port number
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});