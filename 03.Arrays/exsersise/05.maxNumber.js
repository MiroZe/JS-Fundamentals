function maxNumber(arr) {
  let newArr = [];
  let arrL = arr.length;
  for (let i = 0; i < arrL; i++) {
    let currentNumber = arr[i];
    let isBigger = true;

    for (let m = i + 1; m < arrL; m++) {
      let comparedNumber = arr[m];

      if (currentNumber <= comparedNumber) {
        isBigger = false;
      }
    }
    if (isBigger) {
      newArr.push(currentNumber);
    }
  }
  console.log(newArr.join(" "));
}
maxNumber([41, 41, 34, 20]);
