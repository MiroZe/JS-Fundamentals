function secretChat(input) {
  let chat = input.shift();

  let line = input.shift();
  while (line !== "Reveal") {
    let currentLine = line.split(":|:");
    let command = currentLine[0];

    switch (command) {
      case "InsertSpace":
        let indexToInsert = Number(currentLine[1]);
        let first = chat.substring(0, indexToInsert);
        let space = " ";
        let second = chat.substring(indexToInsert);
        chat = first + space + second;
        console.log(chat);
        break;
      case "Reverse":
        let substring = currentLine[1];
        if (chat.includes(substring)) {
          let startIndex = chat.indexOf(substring);
          let substringLength = substring.length;
          let firstPart = chat.substring(0, startIndex);
          let secondPart = chat.substring(startIndex + substringLength);
          substring = substring.split("").reverse().join("");
          chat = firstPart + secondPart + substring;
          console.log(chat);
        } else {
          console.log("error");
        }

        break;
      case "ChangeAll":
        let substringToChange = currentLine[1];
        let replaceString = currentLine[2];
        if (chat.includes(substringToChange)) {
          while (chat.includes(substringToChange)) {
            chat = chat.replace(substringToChange, replaceString);
          }
        }
        console.log(chat);
        break;
    }

    line = input.shift();
  }

  console.log(`You have a new text message: ${chat}`);
}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
