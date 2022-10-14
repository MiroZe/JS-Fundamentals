function triangle(n) {
  let symbol = "$ ";
  let printLine = "";

  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      printLine += symbol;
    }
    console.log(printLine);
    printLine = "";
  }
}
triangle(5);
