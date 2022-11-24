function stringSubstring(word, text) {
  let wordToUpper = word.toUpperCase();
  let isWordExist = false;

  let splittedText = text.split(" ");
  splittedText.forEach((element) => {
    let currentWord = element.toUpperCase();
    if (currentWord === wordToUpper) {
      isWordExist = true;
      return console.log(word);
    } else {
    }
  });

  if (!isWordExist) {
    console.log(`${word} not found!`);
  }
}
stringSubstring("javascript", "JavaScript is the best programming language");
