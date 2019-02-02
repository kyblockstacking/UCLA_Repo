// *********************************************************************************
// chirp.js - this file defines our data and how we talk to mysql
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");

module.exports = {
  getAll: function(cb) {
    var dbQuery = "SELECT * FROM chirps";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;

      // Send data back to route
      cb(result);
    });
  },
  addChirp: function(data, cb) {
    var dbQuery = "INSERT INTO chirps (author, body, created_at) VALUES (?, ?, ?)";

    connection.query(dbQuery, [data.author, data.body, data.created_at], function(err, result) {
      if (err) throw err;
      
      // Callback function provided by route
      cb();
    });
  }
};