function numberModification(number) {
  let result = [];
  let numberToString = number.toString();
  result = numberToString.split("").map(Number);
  let sum = 0;
  for (let elements of result) {
    sum += elements;
  }

  for (let i = 0; i < result.length; i++) {
    let avgSum = sum / result.length;
    if (avgSum < 5) {
      result.push(9);
      sum += result[result.length - 1];
    } else {
      break;
    }
  }
  console.log(result.join(""));
}
numberModification(5835);
