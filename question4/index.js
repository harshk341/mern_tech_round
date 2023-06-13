// check prime number

function checkPrime(numList) {
  numList.forEach((num) => {
    if (num <= 1) {
      console.log(`${num} is not a valid number!`);
    } else if (num > 1) {
      for (let i = 2; i < num; i++) {
        if (num % i == 0) {
          console.log(`${num} is a not prime number`);
          return;
        }
      }
      console.log(`${num} is a prime number`);
    }
  });
}

checkPrime([1, 18, 6, 5, 3, 17, -9, 2, 0, 59, 37]);
