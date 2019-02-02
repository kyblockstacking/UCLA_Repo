* Best practices for REST:

  * GET requests read data from a database.

  * POST requests are used to create new data in a database.

  * PUT requests are used to update a row within a database.

  * DELETE requests are used to delete a row from a database.

  * A POST that creates an item should return the ID of the item it created.

  * PUT and DELETE should specify the ID of the item they're intended to affect in the URL (e.g. `/todos/123`).

  * If the ID for the item specified in a PUT or DELETE couldn't be found, return a 404.

  * If an error occurs in the server, return an error code (e.g. 500).
