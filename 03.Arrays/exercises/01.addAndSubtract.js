function addAndSubtract(arr) {
  let result = [];
  let sum = 0;
  let resultSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    sum += currentElement;
    if (currentElement % 2 === 0) {
      result[result.length] = currentElement + i;
    } else {
      result[result.length] = currentElement - i;
    }
  }
  for (let elements of result) {
    resultSum += elements;
  }
  console.log(result);
  console.log(sum);
  console.log(resultSum);
}
addAndSubtract([-5, 11, 3, 0, 2]);
