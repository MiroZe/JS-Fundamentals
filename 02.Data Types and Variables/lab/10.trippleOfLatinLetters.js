function trippleOfLetters(number) {
 
  for (let i = 0; i < number; i++) {
    let firstChar = String.fromCharCode(97 + i);

    for (let m = 0; m < number; m++) {
      let secondChar = String.fromCharCode(97 + m);
      for (let k = 0; k < number; k++) {
        let thirdChar = String.fromCharCode(97 + k);
        console.log(firstChar + secondChar + thirdChar);
      }
    }
  }
}
trippleOfLetters(1);
