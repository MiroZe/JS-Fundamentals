function wordOccurrences(words) {
  let newArr = words.slice();
  let word = {};
  let counter = 0;
  for (let i = 0; i < words.length; i++) {
    let currentWord = newArr[i];

    for (let m = 0; m < words.length; m++) {
      let comparisionWord = newArr[m];
      if (currentWord === comparisionWord) {
        counter++;
        word[currentWord] = counter;
      }
    }
    counter = 0;
  }
  let sortedArr = Object.entries(word);
  sortedArr.sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);
  sortedArr.forEach((element) => {
    console.log(`${element[0]} -> ${element[1]} times`);
  });
}
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
