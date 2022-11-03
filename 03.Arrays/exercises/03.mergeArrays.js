function mergeArrays(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    let currentElOfFirstArray = arr1[i];
    let currentElOfSecondArray = arr2[i];
    if (i % 2 === 0) {
      result[result.length] =
        Number(currentElOfFirstArray) + Number(currentElOfSecondArray);
    } else {
      result[result.length] = currentElOfFirstArray + currentElOfSecondArray;
    }
  }
  console.log(result.join(" - "));
}
mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
