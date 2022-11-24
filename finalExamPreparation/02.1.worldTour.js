function worldTour(input) {
  let stops = input.shift();
  let line = input.shift();

  while (line !== "Travel") {
    let curentLine = line.split(":");
    let command = curentLine[0];
    switch (command) {
      case "Add Stop":
        let addIndex = Number(curentLine[1]);
        let addString = curentLine[2];
        let stopsLength = stops.length;
        if (addIndex >= 0 && addIndex < stopsLength) {
          let firstPart = stops.substring(0, addIndex);
          let secondPart = stops.substring(addIndex);
          stops = firstPart + addString + secondPart;
          
        }
        console.log(stops);
        break;
      case "Remove Stop":
        let startIndex = Number(curentLine[1]);
        let endIndex = Number(curentLine[2]);
        let length = stops.length;
        if (
          startIndex >= 0 &&
          startIndex < length &&
          endIndex >= 0 &&
          endIndex < length
        ) {
          let removePartOne = stops.substring(0, startIndex);
          let removePartTwo = stops.substring(endIndex + 1);
          stops = removePartOne + removePartTwo;
          
        }
        console.log(stops);
        break;

      case "Switch":
        let oldString = curentLine[1];
        let newString = curentLine[2];
        

        if (stops.includes(oldString) ) {
          stops = stops.split(oldString).join(newString);
        }
        console.log(stops);
        break;
    }
    line = input.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour([
  "Albania:Bulgaria:Cyprus:Deuchland",
  "Switch:Bulgaria: Bulgaria",
  "Travel",
]);
