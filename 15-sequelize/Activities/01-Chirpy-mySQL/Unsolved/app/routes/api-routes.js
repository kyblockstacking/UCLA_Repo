// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var chirp = require("../models/chirp.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all chirps using the chirp model
  app.get("/api/all", function(req, res) {
    chirp.getAll();
  });

  // Add a chirp using the chirp model
  app.post("/api/new", function(req, res) {
    chirp.addChirp();
  });
};
