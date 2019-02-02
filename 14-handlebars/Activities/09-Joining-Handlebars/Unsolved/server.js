var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "books_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.get("/all-books", function(req, res) {
  // TO DO: use the LEFT JOIN query from seeds.sql
  connection.query("", function(err, data) {
    if (err) throw err;

    // TO DO: render the books template
    res.end();
  });
});

app.get("/all-authors", function(req, res) {
  // TO DO: use the RIGHT JOIN query from seeds.sql
  connection.query("", function(err, data) {
    if (err) throw err;

    // TO DO: render the authors template
    res.end();
  });
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
