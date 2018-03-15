function titleize(array, cb) {
  let titles = array.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  cb(titles);
}

titleize(['Mary', 'Brian', 'Leo'], (array) => array.forEach(arr => console.log(arr)));

console.log('=================================================================')

function Elephant(name, height, skills) {
  this.name = name;
  this.height = height;
  this.skills = skills;
}

Elephant.prototype.trumpet = function() {
  console.log('PHRRRRRRRRRRRRRRRRRRRRR');
}

Elephant.prototype.grow = function() {
  this.height = this.height + 12;
}

Elephant.prototype.addTrick = function(trick) {
  this.skills.push(trick);
}

Elephant.prototype.play = function() {
  console.log(
    `${this.name} is ${getRandomInt(this.skills.length)}ing`
  );
}

e1 = new Elephant("Timmy", 12, ['jump', 'cry', 'kick']);
e1.trumpet();
console.log(e1.height);
e1.grow();
console.log(e1.height);
console.log(e1.skills);
e1.addTrick('sleep');
console.log(e1.skills);
e1.play;
e2 = new Elephant("Moist", 1, ['sleep']);
e2.trumpet();
console.log(e2.height);
e2.grow();
console.log(e2.height);
console.log(e2.skills);
e2.addTrick('sleep');
console.log(e2.skills);
e2.play;

console.log('=================================================================')

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

function paradeHelper(elephant) {
  name = elephant.name;
  console.log(`${name} is trotting by!`);
}

herd.forEach(elephant => paradeHelper(elephant));
