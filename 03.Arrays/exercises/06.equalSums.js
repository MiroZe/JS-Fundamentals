function equalSums(arr) {
  let isEqualNumber = true;

  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let l = 0; l < i; l++) {
      leftSum += arr[l];
    }
    for (let r = arr.length - 1; r > i; r--) {
      rightSum += arr[r];
    }

    if (leftSum === rightSum) {
      console.log(i);
      isEqualNumber = true;
      break;
    } else {
      isEqualNumber = false;
    }
  }
  if (isEqualNumber === false) {
    console.log("no");
  }
}
equalSums([1]);
