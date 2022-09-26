function tripples(num) {
  let printLine = "";
  let number = Number(num);
  for (let i = 0; i < number; i++) {
    let letter = String.fromCharCode(97 + i);

    for (let m = 0; m < number; m++) {
      let letter2 = String.fromCharCode(97 + m);
      for (let k = 0; k < number; k++) {
        let letter3 = String.fromCharCode(97 + k);
        printLine += `${letter}${letter2}${letter3}\n`;
      }
    }
  }

  console.log(printLine);
}
tripples("2");
