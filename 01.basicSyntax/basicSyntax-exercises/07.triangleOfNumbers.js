function triangleOfNumbers(number) {
  for (let row = 1; row <= number; row++) {
    let printLine = "";
    for (col = 1; col <= row; col++) {
      printLine += `${row} `;
    }
    console.log(printLine);
  }
}
triangleOfNumbers(5);
