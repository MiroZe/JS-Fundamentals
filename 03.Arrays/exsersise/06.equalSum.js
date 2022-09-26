function equalSum(arr) {
  let equalIndex = "no";
  let arrL = arr.length;

  for (let i = 0; i < arrL; i++) {
    let rightSum = 0;
    let leftSum = 0;

    for (let l = 0; l < i; l++) {
      leftSum += arr[l];
    }
    for (let r = i + 1; r < arrL; r++) {
      rightSum += arr[r];
    }

    if (rightSum === leftSum) {
      equalIndex = i;
    }

  }
  console.log(equalIndex);
}
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
