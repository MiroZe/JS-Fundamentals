function passwordReset(input) {
  let password = input.shift();
  let line = input.shift();

  while (line !== "Done") {
    let currentLine = line.split(" ");
    let command = currentLine[0];

    switch (command) {
      case "TakeOdd":
        let newPassword = "";
        for (let i = 0; i < password.length; i++) {
          let currentChar = password[i];
          if (i % 2 !== 0) {
            newPassword += currentChar;
          }
        }
        password = newPassword;
        console.log(password);
        break;
      case "Cut":
        let cutIndex = Number(currentLine[1]);
        let length = Number(currentLine[2]);
        let cuttedChars = password.substring(cutIndex, cutIndex + length);
        let firstPart = password.substring(0, cutIndex);
        let secondPart = password.substring(cutIndex + length);
        password = firstPart + secondPart;
        console.log(password);
        break;

      case "Substitute":
        let substring = currentLine[1];
        let substitute = currentLine[2];
        if (password.includes(substring)) {
          while (password.includes(substring)) {
            password = password.replace(substring, substitute);
          }
          console.log(password);
        } else {
          console.log("Nothing to replace!");
        }
        break;
    }

    line = input.shift();
  }
  console.log(`Your password is: ${password}`);
}
passwordReset([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);
