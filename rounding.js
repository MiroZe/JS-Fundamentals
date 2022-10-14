function rounding(num1, num2) {
  if (num2 > 15) {
    num2 = 15;
  }
  let printNum = num1;
  console.log(parseFloat(printNum.toFixed(num2)));
}
rounding(10.5, 3);
