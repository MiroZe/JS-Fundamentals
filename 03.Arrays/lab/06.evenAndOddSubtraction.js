function evenAndOddSubtraction(arr) {
  let evenSum = 0;
  let oddSum = 0;

  for (let number of arr) {
    if (number % 2 === 0) {
      evenSum += number;
    } else {
      oddSum += number;
    }
  }
  let difference = evenSum - oddSum;
  console.log(difference);
}
evenAndOddSubtraction([2, 4, 6, 8, 10]);
