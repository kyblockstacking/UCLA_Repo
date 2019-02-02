var express = require("express");
var path = require("path");

var app = express();

var PORT = 3000;

// automatically create GET routes for all files in the "assets" folder
// this is much easier than manually creating routes for every static file
app.use('/', express.static('assets'));

app.get("/", function(req, res) {
	// we're using path.join here to safely combine two filepaths
	// __dirname + "/index.html" would also work
	res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});