function lastKNumbersSequence(sequenceLength, sumCounter) {
  let sequenceArray = [1];

  for (let i = 1; i < sequenceLength; i++) {
    let currentSum = 0;
    let currentArr = [];

    if (sequenceArray.length >= sumCounter) {
      currentArr = sequenceArray.slice(sequenceArray.length - sumCounter);
    } else {
      currentArr = sequenceArray.slice();
    }

    for (let el of currentArr) {
      currentSum += el;
    }
    sequenceArray.push(currentSum);
  }

  console.log(sequenceArray.join(' '));
}
lastKNumbersSequence(8, 2);
