function modernTimes(text) {
  let arrOfText = text.split(" ");
  arrOfText.forEach((word) => {
    if (word.startsWith("#") && word.length > 1) {
      let newword = word.substring(1);
      let isOnlyLetters = true;
      for (char of newword) {
        let isSmallLetter = char.charCodeAt() >= 65 && char.charCodeAt() <= 90;
        let isCapitalLetter =
          char.charCodeAt() >= 97 && char.charCodeAt() <= 122;
        if (!isSmallLetter && !isCapitalLetter) {
          isOnlyLetters = false;
          break;
        }
      }
      if (isOnlyLetters) {
        console.log(newword);
      }
    }
  });
}
modernTimes("Nowadays everyone uses # to tag a #special word in #socialMedia");
