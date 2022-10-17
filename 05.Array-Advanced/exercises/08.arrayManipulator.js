function arrayManipulator(originalArray, commandArray) {
  let isCommandPrint = false;

  for (let i = 0; i < commandArray.length; i++) {
    let commandLine = commandArray[i].split(" ");
    let command = commandLine[0];
    let index = 0;
    let element = 0;

    switch (command) {
      case "add":
        index = commandLine[1];
        element = Number(commandLine[2]);
        originalArray.splice(index, 0, element);
        break;
      case "addMany":
        index = commandLine[1];
        for (let i = commandLine.length - 1; i >= 2; i--) {
          element = Number(commandLine[i]);
          originalArray.splice(index, 0, element);
        }
        break;
      case "contains":
        element = Number(commandLine[1]);
        index = originalArray.indexOf(element);
        console.log(index);
        break;
      case "remove":
        index = Number(commandLine[1]);
        originalArray.splice(index, 1);
        break;
      case "shift":
        let position = Number(commandLine[1]);
        for (let i = 0; i < position; i++) {
          let firstElement = originalArray[0];
          originalArray.shift();
          originalArray.push(firstElement);
        }
        break;
      case "sumPairs":
        let sumPairs = [];

        for (let i = 0; i < originalArray.length; i += 2) {
          let currentSum = 0;
          if (originalArray.length % 2 === 0) {
            currentSum = originalArray[i] + originalArray[i + 1];
          } else {
            if (i + 1 === originalArray.length) {
              currentSum = originalArray[i];
            } else {
              currentSum = originalArray[i] + originalArray[i + 1];
            }
          }
          sumPairs.push(currentSum);
          
        }
        originalArray = sumPairs;
        break;
      case "print":
        isCommandPrint = true;
        break;
    }
    if (isCommandPrint) {
      break;
    }
  }
  let output = originalArray.join(", ");
  console.log(`[ ${output} ]`);
}
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);
