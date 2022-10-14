function sortNumbers(num1, num2, num3) {
  let bigNum = "";
  let middleNum = "";
  let lastNum = "";
  let printLine = "";
  if (num1 >= num2 && num1 >= num3) {
    bigNum = num1;
    if (num2 >= num3) {
      middleNum = num2;
      lastNum = num3;
    } else {
      middleNum = num3;
      lastNum = num2;
    }
  } else if (num2 >= num1 && num2 >= num3) {
    bigNum = num2;
    if (num1 >= num3) {
      middleNum = num1;
      lastNum = num3;
    } else {
      middleNum = num3;
      lastNum = num1;
    }
  } else if (num3 >= num1 && num3 >= num2) {
    bigNum = num3;
    if (num1 >= num2) {
      middleNum = num1;
      lastNum = num2;
    } else {
      middleNum = num2;
      lastNum = num1;
    }
  }
  console.log(bigNum);
  console.log(middleNum);
  console.log(lastNum);
}
sortNumbers(100, 0, 2);
