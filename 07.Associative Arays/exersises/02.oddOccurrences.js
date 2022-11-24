function oddOccurrences(inputOfStrings) {
  let stringArr = inputOfStrings.split(" ");
  let object = {};

  for (const element of stringArr) {
    let currentElement = element.toLowerCase();

    if (!object[currentElement]) {
      object[currentElement] = 1;
    } else {
      object[currentElement]++;
    }
  }

  let sortedObject = Object.entries(object).sort((a, b) => b[1] - a[1]);
  let printLine = "";
  for (const key of sortedObject) {
    if (key[1] % 2 !== 0) {
      printLine += `${key[0]} `;
    }
  }
  console.log(printLine);
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
