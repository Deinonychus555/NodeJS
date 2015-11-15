var u = require('utilities');
var an = require('animals');

var da = {Tweetie:"bird"};

console.log("utilities: " + u);
console.log();
console.log("animals: " + an);
console.log();
console.log("animal: " + da);
console.log();

console.log(">var q = utilities.SomeSingleton.getInstance(animals);");
var q = u.SomeSingleton.getInstance(an);

console.log(q);
console.log();

console.log(">utilities.SomeSingleton.reset();");
u.SomeSingleton.reset();

console.log(">q = utilities.SomeSingleton.getInstance(animal);");
q = u.SomeSingleton.getInstance(da);

console.log(q);
console.log();

console.log(">q = utilities.SomeSingleton.getInstance(animals);");
q = u.SomeSingleton.getInstance(an);

console.log(q);




