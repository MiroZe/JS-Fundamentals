function treasureHunt(arr) {
  let chest = arr.shift().split("|");

  for (let i = 0; i < arr.length - 1; i++) {
    let currentCommand = arr[i].split(" ");
    let order = currentCommand[0];

    switch (order) {
      case "Loot":
        for (let m = 1; m < currentCommand.length; m++) {
          let item = currentCommand[m];
          if (!chest.includes(item)) {
            chest.unshift(item);
          }
        }
        break;
      case "Drop":
        let index = Number(currentCommand[1]);

        if (index >= 0 && index < chest.length) {
          let itemToDrop = chest.splice(index, 1);
          chest.push(itemToDrop);
        }
        break;
      case "Steal":
        let stealed = [];
        let deleteCounter = Number(currentCommand[1]);
        if (deleteCounter > chest.length) {
          deleteCounter = chest.length;
        }

        stealed = chest.slice(-deleteCounter);
        chest.splice(-deleteCounter)

        console.log(stealed.join(", "));
        break;
    }
  }

  let sum = 0;
  let elementsCounter = chest.length;
  if (elementsCounter > 0) {
    for (let elements of chest) {
      sum += elements.length;
    }
    let avgSum = sum / elementsCounter;
    console.log(`Average treasure gain: ${avgSum.toFixed(2)} pirate credits.`);
  } else {
    console.log("Failed treasure hunt.");
  }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])

