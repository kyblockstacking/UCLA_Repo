var fs = require("fs");

function File(filename) {
  this.filename = filename;

  this.write = function(data) {
    fs.writeFile(this.filename, data, function() {

    });
  };

  // TO DO: add a callback function as an argument, then call the function with the returned "res" data

  this.read = function(cb) {
    fs.readFile(this.filename, "utf-8", function(err, res) {
      cb(res);
    });
  };
}

module.exports = File;