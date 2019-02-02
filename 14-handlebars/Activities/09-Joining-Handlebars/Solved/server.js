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
  connection.query("SELECT title, firstName, lastName FROM books LEFT JOIN authors ON books.authorId = authors.id;", function(err, data) {
    if (err) throw err;

    res.render("books", {books: data});
  });
});

app.get("/all-authors", function(req, res) {
  connection.query("SELECT title, firstName, lastName FROM books RIGHT JOIN authors ON books.authorId = authors.id;", function(err, data) {
    if (err) throw err;

    res.render("authors", { authors: data });
  });
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
