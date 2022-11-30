function worldTour(input) {
  let destination = input.shift();
  let line = input.shift();

  while (line !== "Travel") {
    let [command, value, ...rest] = line.split(":");
    switch (command) {
      case "Add Stop":
        let index = Number(value);
        let string = rest[0];
        if (index >= 0 && index < destination.length) {
          let firstPart = destination.substring(0, index);
          let secondPart = destination.substring(index);
          destination = firstPart + string + secondPart;
        }
        console.log(destination);
        break;

      case "Remove Stop":
        let startIndex = Number(value);
        let endIndex = Number(rest[0]);
        if (
          startIndex >= 0 &&
          startIndex < destination.length &&
          endIndex >= 0 &&
          endIndex < destination.length
        ) {
          let removeString = destination.substring(startIndex, endIndex + 1);
          destination = destination.replace(removeString, "");
        }
        console.log(destination);
        break;
      case "Switch":
        let oldString = value;
        let newString = rest[0];
        if (destination.includes(oldString)) {
          destination = destination.replace(
            new RegExp(oldString, "g"),
            newString
          );
        }
        console.log(destination);
        break;
    }

    line = input.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${destination}`);
}
worldTour([
  "Albania:Bulgaria:Cyprus:Deuchland",
  "Add Stop:3:Nigeria",
  "Remove Stop:4:8",
  "Switch:Albania: Azərbaycan",
  "Travel",
]);
