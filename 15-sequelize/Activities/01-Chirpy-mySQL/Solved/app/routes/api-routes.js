// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var chirp = require("../models/chirp.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all chirps
  app.get("/api/all", function(req, res) {
    chirp.getAll(function(data) {
      res.json(data);
    });
  });

  // Add a chirp
  app.post("/api/new", function(req, res) {
    chirp.addChirp(req.body, function() {
      res.end();
    });
  });
};
