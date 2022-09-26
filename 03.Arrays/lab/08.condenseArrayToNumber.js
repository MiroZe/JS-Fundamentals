function condenseArrayToNumber(numbers) {
  let condensedArr = [];
  for (let elements of numbers) {
    condensedArr.push(elements);
  }

  while (condensedArr.length > 1) {
    let tempArray = [];
    for (let i = 0; i < condensedArr.length - 1; i++) {
      tempArray[i] = condensedArr[i] + condensedArr[i + 1];
    }
    condensedArr = tempArray;
  }
  console.log(condensedArr.join());
}
condenseArrayToNumber([2, 10, 3]);
