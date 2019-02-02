var name = "max";

// ES5 - bracket syntax lets us plug a variable value in as an object property
var obj = {};
obj[name] = 500;

// ES6 - create the dynamic property at the same time as the object
var obj = {
  [name]: 500
};

console.log(obj.max); // 500

// ES5 - the property is the same name as the variable we're using
var obj = {
  name: name
};

// ES6 - if the same, we only need to write it once
var obj = { name };

console.log(obj.name); // max