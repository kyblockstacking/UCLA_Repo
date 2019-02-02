# Instructions

* Copy the contents of `schema.sql` and `seeds.sql` into MySQL Workbench to create the database and initial data. Note the various JOIN queries written at the bottom of the seeds file.

* In `server.js`, update the `/all-books` route to use the LEFT JOIN query. Pass the returned data into the `books.handlebars` template.

* Update the `/all-authors` route to use the RIGHT JOIN query. Pass the returned data into the `authors.handlebars` template.

* In both templates, loop over the data and print out an `<li>` tag for each book or author. Use a Handlebars #if statement to exclude missing data. For instance, the books template should look like this, with no byline for Dracula since that data is missing:

  ```
  Adventures of Huckleberry Finn by Mark Twain
  Alice's Adventures in Wonderland by Lewis Carroll
  Dracula
  ```

  And the authors template should look like this, where Andre Asselin has missing data (no books):

  ```
  Mark Twain wrote Adventures of Huckleberry Finn
  Lewis Carroll wrote Alice's Adventures in Wonderland
  Andre Asselin
  ```