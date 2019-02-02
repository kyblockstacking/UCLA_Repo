const heroes = ["steve", "tony", "thor", "bruce", "natasha", "wanda", "bucky", "sam", "peter", "gamora"];

// find halfway point
const half = heroes.length/2;

while (heroes.length > half) {
  // find random index from remaining array
  let rando = Math.floor(Math.random() * heroes.length);

  // use splice to remove corresponding index
  heroes.splice(rando, 1);
}

console.log(heroes);