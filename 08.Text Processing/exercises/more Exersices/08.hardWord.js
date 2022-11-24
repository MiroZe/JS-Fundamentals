function hardWord(input) {
  let myLibrary = input.pop().sort((a, b) => a.length - b.length);
  let text = input.toString();
  let arrOFWords = text.split(" ");

  for (word of arrOFWords) {
    let currentWordLength = word.length;
    if (word.startsWith("_") && word.endsWith("_")) {
      for (libraryWord of myLibrary) {
        let libraryWordLength = libraryWord.length;
        if (currentWordLength === libraryWordLength) {
          text = text.replace(word, libraryWord);
          break;
        }
      }
    } else if (
      (word.startsWith("_") && word.endsWith(".")) ||
      (word.startsWith("_") && word.endsWith(","))
    ) {
      let lastCharacter = word[word.length - 1];

      currentWordLength = word.length - 1;

      for (libraryWord of myLibrary) {
        let libraryWordLength = libraryWord.length;
        if (currentWordLength === libraryWordLength) {
          text = text.replace(word, libraryWord + lastCharacter);
          break;
        }
      }
    }
  }
  console.log(text);
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);
