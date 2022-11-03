function evenAndOddSubtraction(arr) {
  let evenSum = 0;
  let oddSum = 0;

  for (let elements of arr) {
    let currentElem = Number(elements);

    if (currentElem % 2 === 0) {
      evenSum += currentElem;
    } else {
      oddSum += currentElem;
    }
  }

  let different = (a, b) => a - b;
  console.log(different(evenSum, oddSum));
}
evenAndOddSubtraction([3, 5, 7, 9]);
