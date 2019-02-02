var express = require("express");
var path = require("path");

var app = express();

var PORT = 3000;

app.get("/images/big-wheel-300px.png", function(req, res) {
	res.sendFile(path.join(__dirname, "images/big-wheel-300px.png"));
});

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});