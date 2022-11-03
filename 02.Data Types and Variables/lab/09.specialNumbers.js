function specialNumbers(number) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    let currentNumber = i;
    while (currentNumber !== 0) {
      sum += currentNumber % 10;
      currentNumber = Math.floor(currentNumber / 10);
      
    }
    if(sum === 5 || sum === 7 || sum === 11) {
        console.log(`${i} -> True`);
      }
      else{
        console.log(`${i} -> False`);
      }
      sum = 0;
  }
}
specialNumbers(20);
