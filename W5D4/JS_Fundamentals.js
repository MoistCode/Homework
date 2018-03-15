// function mysteryScoping1() {
//   var x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// function mysteryScoping2() {
//   const x = 'out of block';
//   if (true) {
//     const x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// function mysteryScoping3() {
//   const x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// function mysteryScoping4() {
//   let x = 'out of block'
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// function mysteryScoping5() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   let x = 'out of block again'
//   console.log(x);
// }
//
// mysteryScoping1();
// mysteryScoping2();
// mysteryScoping3();
// mysteryScoping4();
// mysteryScoping5();

function madLib(verb, adjective, noun) {
  console.log(
    `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`
  );
}

madLib('make', 'best', 'guac');

function isSubstring(searchString, subString) {
  let searchSplit = searchString.split(" ");
  let subSplit = subString.split(" ");
  let emptyArr = [];

  for(i = 0; i < searchSplit.length; i++) {
    for(j = 0; j < subSplit.length; j++) {
      if (searchSplit[i] === subSplit[j]) {
        emptyArr.push(subSplit[j]);
      }
    }
  }

  return emptyArr.length >= subSplit.length;
}

console.log(isSubstring('times new roman monkey', 'times new monkey'));
