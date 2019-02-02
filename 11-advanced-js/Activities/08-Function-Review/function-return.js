// functions can be used to "return" data, which can also be based on incoming data. for example, a toaster:
function toaster1(bread) {
  return "toasted " + bread;
}

var toast = toaster1("sourdough");

// so why not return an object?
function toaster2(bread) {
  return {
    type: bread,
    toastiness: 500
  };
}

// but if we're going to use a function to make objects for us, we should really use an official constructor:
function Toaster(bread) {
  this.type = bread;
  this.toastiness = 500;
}

// and call it like so:
var toast = new Toaster("whole wheat");