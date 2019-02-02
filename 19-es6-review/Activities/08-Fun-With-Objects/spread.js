var leia = {
  name: "Leia Organa",
  hair: "Brown",
  species: "Human"
};

// ES5 - copy object and add new property
var clone = JSON.parse(JSON.stringify(leia));
clone.homeworld = "Alderaan";

// ES6 - use "spread operator" to port over all of leia's properties
var clone = {...leia, homeworld: "Alderaan"};

console.log(clone); // [Object]

// BONUS: note that, with the ES5 way, we had to stringify and then parse the object in order to copy it. in javascript, objects are passed by reference, so if we tried to do something like `var clone = leia;` and then added a property to clone, this would also add the same property to the original leia object.