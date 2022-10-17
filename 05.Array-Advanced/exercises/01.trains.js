function train(input) {
  let passengersInTrain = input.shift().split(" ").map(Number);
  let maxCapacity = input.shift();
  let inputL = input.length;

  for (let i = 0; i < inputL; i++) {
    let currentLine = input[i].split(" ");
    let [command, number] = input[i].split(" ");
    if (command === "Add") {
      passengersInTrain.push(Number(number));
    } else {
      number = Number(command);

      for (let m = 0; m < passengersInTrain.length; m++) {
        if (number + passengersInTrain[m] <= maxCapacity) {
          passengersInTrain[m] = number + passengersInTrain[m];
          break;
        }
      }
    }
  }
  console.log(passengersInTrain.join(" "));
}
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
