// variables declared as "const" cannot be changed
const names = ["Patrick", "Peter", "Clark"];

// however, if the const is an array, we can still push items into it. we just can't turn the array into something else entirely.
names.push("JP");

// ideally, we would like to loop over the array and print each name one second after each other. currently, though, this doesn't work. what's wrong with the scope of i? what happens if we declare it with "let" instead?
for (var i = 0; i < names.length; i++) {
  var time = i*1000;
  
  setTimeout(function() {
    console.log(names[i]);
  }, time);
}