function equalArrays(arr1, arr2) {
  let arr1Sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = Number(arr1[i]);
    arr1Sum += arr1[i];
  }
  for (let k = 0; k < arr2.length; k++) {
    arr2[k] = Number(arr2[k]);
  }
  let areEqual = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      areEqual = false;
      break;
    }
  }
  if (areEqual) {
    console.log(`Arrays are identical. Sum: ${arr1Sum}`);
  }
}
equalArrays(["10"], ["10"]);
