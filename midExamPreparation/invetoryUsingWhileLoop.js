function inventory(arr) {
  let myInventory = arr.shift().split(", ");

  let commandLIne = arr.shift();
  while (commandLIne !== "Craft!") {
    let [command, item] = commandLIne.split(" - ");
    let isAlreadyExist = myInventory.includes(item);

    switch (command) {
      case "Collect":
        if (!isAlreadyExist) {
          myInventory.push(item);
        }
        break;
      case "Drop":
        let index = myInventory.indexOf(item);
        if (isAlreadyExist) {
          myInventory.splice(index, 1);
        }
        break;

      case "Combine Items":
        let combineItems = item.split(":");
        let oldItem = combineItems[0];
        let newItem = combineItems[1];
        let combineIndex = myInventory.indexOf(oldItem);
        if (myInventory.includes(oldItem)) {
          myInventory.splice(combineIndex + 1, 0, newItem);
        }
        break;
      case "Renew":
        let renewIndex = myInventory.indexOf(item);
        if (isAlreadyExist) {
          let itemToRenew = myInventory.splice(renewIndex, 1);
          myInventory.push(itemToRenew[0]);
        }
        break;
    }

    commandLIne = arr.shift();
  }

  console.log(myInventory.join(", "));
}
inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]


)