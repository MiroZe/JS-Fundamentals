function wordsTracker(input) {
  let sentence = input.shift().split(" ");
  let sentenceObject = {};
  let counter = 0;

  for (const myWord of sentence) {
    sentenceObject[myWord] = counter;

    for (const word of input) {
      let currentWord = word;

      if (myWord === currentWord) {
        counter++;
        sentenceObject[myWord] = counter;
      }
    }
    counter = 0;
  }

  let sortedArray = Object.entries(sentenceObject).sort(
    ([keyA, valueA], [keyB, valueB]) => valueB - valueA
  );

  sortedArray.forEach((element) => {
    console.log(`${element[0]} - ${element[1]}`);
  });
}
wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
