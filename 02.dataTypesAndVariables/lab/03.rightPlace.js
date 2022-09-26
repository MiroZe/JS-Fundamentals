function rightPlace(word1, char, word2) {
  let resultWord = "";

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] === "_") {
      resultWord += char;
    } else {
      resultWord += word1[i];
    }
  }
  if (resultWord === word2) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}
rightPlace("Str_ng", "i", "String");
