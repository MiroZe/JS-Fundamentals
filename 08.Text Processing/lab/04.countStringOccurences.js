function countStringOccurences(text, targetWord) {
  let splittedText = text.split(" ");
  let counter = 0;

  for (word of splittedText) {
    if (word === targetWord) {
      counter++;
    }
  }
  console.log(counter);
}
countStringOccurences(
  "softuni is great place for learning new programming languages",
  "softuni"
);
