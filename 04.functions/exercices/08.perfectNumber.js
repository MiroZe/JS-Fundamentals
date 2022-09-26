function perfectNumber(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  let isPerfect =
    sum === number ? "We have a perfect number!" : "It's not so perfect.";
  console.log(isPerfect);
}
perfectNumber(1236498);
