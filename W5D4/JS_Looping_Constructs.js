function fizzBuzz(array) {
  let emptyArr = [];

  for(i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 && array[i] % 5 != 0) {
      emptyArr.push(array[i]);
    }

    if (array[i] % 5 === 0 && array[i] % 3 != 0)  {
      emptyArr.push(array[i]);
    }
  }

  return console.log(emptyArr);
}

function isPrime(number) {
  let emptyArr = [];

  for(i = 1; i <= number; i++) {
    if (number % i === 0) {
      emptyArr.push(i)
    }
  }

  return (emptyArr.length < 3);
}

function sumOfPrimes(num) {
  let emptyArr = [];
  let counter = 2;
  let counter2 = 0;
  let sum = 0;
  while (true) {
    if (counter2 === num) {
      return sum;
    }
    if (isPrime(counter)) {
      sum = sum + counter
      counter2++;
    }
    counter++;
  }

}

fizzBuzz([1,2,3,4,5,6,7,8,9,15]);
console.log(isPrime(4));
console.log(sumOfPrimes(4));
