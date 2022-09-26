function amazingNumbers(num) {
  let sum = 0;
  let isAmazingDigit = false;
  let numToString = String(num)

  for (let i = 0; i < numToString.length; i++) {
    sum += Number(num[i]);
  }
  let sumToString = String(sum);
  for (let i = 0; i < sumToString.length; i++) {
    if (sumToString[i] === "9") {
      isAmazingDigit = true;
      break;
    }
  }
  let amazing = isAmazingDigit ? 'True' : 'False';
 
 

  console.log(`${num} Amazing? ${amazing}`);
}
amazingNumbers("126");
