// window.setTimeout(function(){
//   alert("Hammertime!");
// }, 5 * 1000);
//
// function hammerTime(time) {
//   window.setTimeout(function() {
//     alert(`${time} is hammertime!`)
//   }, time * 1000);
// }
//
// hammerTime(5);


// const readline = require('readline');
//
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// reader.question('Would you like some tea?', function(res1) {
//   console.log(`You responded with ${res1}`);
//   reader.question('Would you like some biscuits?', function(res2) {
//     console.log(`You responded with ${res2}`);
//     var first = res1;
//     var second = res2;
//     var firstRes = (first === 'yes') ? 'do' : "don't";
//     var secondRes = (second === 'yes') ? 'do' : "don't";
//     console.log(`So you ${firstRes} want tea and ${secondRes} want tea.`)
//     reader.close();
//   })
// })

// Ask the user if they'd like some tea
// reader.question("Would you like some tea?", (res) => {
//   first = res;
//   console.log(`You replied ${res}.`);
// });
//
// reader.question("Would you like some biscuits?", (res) => {
//   second = res;
//   console.log(`You replied ${res}.`);
// });
//
// const firstRes = (first === 'yes') ? 'do' : "don't";
// const secondRes = (second == 'yes') ? 'do' : "don't";
//
// console.log(`So you ${firstRes} want some tea and you ${secondRes} want some biscuits.`);
// reader.close();

function Cat() {
  this.name = 'Markov';
  this.age = 3;
}

function Dog() {
  this.name = 'Noodles';
  this.age = 4;
}

Dog.prototype.chase = function(cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}!`);
}

const Markov = new Cat();
const Noodles = new Dog();

Noodles.chase(Markov);
Noodles.chase.call(Markov, Noodles);
Noodles.chase.apply(Markov, [Noodles]);
