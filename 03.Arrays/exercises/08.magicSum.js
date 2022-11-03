function maxNumber(arrOfNumbers, targetSum) {
    let pairs = '';
    let tempArr = [];
  for (let i = 0; i < arrOfNumbers.length; i++) {
    
    for (let m = i + 1; m < arrOfNumbers.length; m++) {
      if (arrOfNumbers[i] + arrOfNumbers[m] === targetSum) {
        pairs = `${arrOfNumbers[i]} ${arrOfNumbers[m]}`
        tempArr[tempArr.length] = pairs;
        
      }
    }
  }
  console.log(tempArr.join('\n'));
}
maxNumber([14, 20, 60, 13, 7, 19, 8],
  27
  )
