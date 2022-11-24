function passwordGenerator(input) {
  let text = input[0].concat(input[1]).toLowerCase();
  let key = input[2].toUpperCase();
  let index = 0;

  for (const char of text) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      text = text.replace(char, key[index]);
      index++;
      if (index > key.length - 1) {
        index = 0;
      }
    }
  }
  let result = text.split("").reverse().join("");
  console.log(`Your generated password is ${result}`);
}
passwordGenerator(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
