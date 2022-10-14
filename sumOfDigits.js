function sumOfDigits(number) {
  let numberToString = String(number);
  let sum = 0;

  for (let i = 0; i < numberToString.length; i++) {
    let currentNumber = Number(numberToString[i]);
    sum += currentNumber;
  }
  console.log(sum);
}
sumOfDigits(543);
