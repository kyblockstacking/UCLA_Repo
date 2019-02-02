// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var path = require("path");

var app = express();
var PORT = 3000;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
app.use(express.static("public"));

// Database configuration
var databaseUrl = "testdb";
var collections = ["users"];

// Hook mongojs config to db variable
var db = mongojs(databaseUrl, collections);

// Log any mongojs errors to console
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Routes
// ======

// Simple index route
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Handle form submission
app.post("/signup", function(req, res) {
  
});

// Listen on port 3000
app.listen(PORT, function() {
  console.log("App running on port 3000!");
});
