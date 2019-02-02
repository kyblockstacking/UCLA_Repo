# Instructions

This is a small, incomplete MVC app where the controller (routing) and model need to be finished so users can not only see all "chirps" in the database but also create new chirps.

  * Run the `schema.sql` code in Workbench so you have a database and table to work with.

  * Add methods to the `models/chirp.js` object that will get all existing chirps from the database and insert new chirps.

  * Call these model methods in `api-routes.js`.

  * **HINT:** You will need to utilize callback functions to get the MySQL data from the model into the route file.

  * **HINT:** You will only need to edit `api-routes.js` and `models/chirp.js`. The front-end is already built.

  * **BONUS:** Try replacing your callbacks with Javascript "promises."
