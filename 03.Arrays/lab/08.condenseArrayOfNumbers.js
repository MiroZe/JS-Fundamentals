function condenseArrayOfNumbers(arrOfNum) {
  if (arrOfNum.length <= 1) {
    sum = Number(arrOfNum[0]);
  } else {
    sum = 0;
  }

  while (arrOfNum.length > 1) {
    let newArr = [];
    let tempSum = 0;

    for (let i = 0; i < arrOfNum.length - 1; i++) {
      newArr.push(arrOfNum[i] + arrOfNum[i + 1]);
      tempSum += arrOfNum[i] + arrOfNum[i + 1];
    }
    arrOfNum = newArr;

    sum = tempSum;
  }

  console.log(sum);
}
condenseArrayOfNumbers([5, 0, 4, 1, 2]);
