# Mongo Validation

Let's practice regular expressions in a small application. On the front-end, we have a simple sign up form that will send a username and password to the back-end. We want to make sure this data is in a specific format before we save it in the database. Since front-end code can be bypassed, we should do our validation on the back-end.

## Instructions

* In `server.js`, update the POST route to validate the data being given to us. Do this using regular expressions:

  * Use the regex pattern from the last activity for the username.

  * Find a good regex pattern online for the password.

* If the validation fails, _do not_ insert the data into the database. Instead, send a message to the front-end. In `public/app.js`, add code that will display this message to the user.

* **HINT:** You can use the .test() method to run regex patterns in Javascript.