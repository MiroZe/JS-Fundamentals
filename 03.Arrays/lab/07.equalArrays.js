function equalArrays(arr1, arr2) {
  let sum = 0;
  let isEqual = false;

  for (let i = 0; i < arr1.length; i++) {
    let currentOfFirst = Number(arr1[i]);
    let currentOFSecond = Number(arr2[i]);
         
      if (currentOfFirst === currentOFSecond) {
        sum += currentOfFirst;
        isEqual = true;
      } else {
        console.log(`Arrays are not identical. Found difference at ${i} index`);
        isEqual = false;

        break;
      }
    }
    
  
  if (isEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
equalArrays(['1'], ['10']);
