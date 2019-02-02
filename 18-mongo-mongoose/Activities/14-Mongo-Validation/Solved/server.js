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
  // Use regex to verify if username is at least five alphanumeric characters
  if (!/\w{5,}/.test(req.body.username)) {
    res.send("Username is not in correct format");
  }
  // Use regex to verify if password contains at least one number
  else if (!/(?=.*\d).{5,}/.test(req.body.password)) {
    res.send("Password is not secure enough");
  }
  else {
    // Insert into mongo database
    db.users.insert(req.body, function(err, results) {
      res.send("Account created!");
    });
  }
});

// Listen on port 3000
app.listen(PORT, function() {
  console.log("App running on port 3000!");
});
