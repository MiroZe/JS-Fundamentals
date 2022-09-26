function reverseString(word) {
    let currentWord = word;
    let printLine = "";
  
    for (let i = currentWord.length - 1; i >= 0; i--) {
      printLine += `${currentWord[i]}`;
    }
  
    console.log(printLine);
  }
  reverseString('Hello')