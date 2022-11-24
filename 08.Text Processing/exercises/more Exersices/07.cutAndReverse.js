function cutAndReverse(textLine) {
  let middleOfTextLine = textLine.length / 2;

  let firstText = textLine
    .substring(0, middleOfTextLine)
    .split("")
    .reverse()
    .join("");

  let secondText = textLine
    .substring(middleOfTextLine)
    .split("")
    .reverse()
    .join("");
  console.log(firstText);
  console.log(secondText);
}
cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
