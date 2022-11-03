function reverseInPlace(stringArr) {
  let stringArrL = stringArr.length;
  let printLine = "";

  for (let i = stringArrL - 1; i >= 0; i--) {
    if (i === 0) {
      printLine += stringArr[i];
    } else {
      printLine += `${stringArr[i]} `;
    }
  }
  console.log(printLine);
}
reverseInPlace(["abc", "def", "hig", "klm", "nop"]);
