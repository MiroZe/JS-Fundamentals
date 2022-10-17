function inventory(arr) {
  let myInventoryArray = arr.shift().split(", ");

  for (let i = 0; i < arr.length - 1; i++) {
    let commandLine = arr[i].split(" - ");
    let command = commandLine[0];
    let item = commandLine[1];
    let index = myInventoryArray.indexOf(item);

    let isAlreadyExist = myInventoryArray.includes(item);

    switch (command) {
      case "Collect":
        if (!isAlreadyExist) {
          myInventoryArray.push(item);
        }
        break;
      case "Drop":
        if (isAlreadyExist) {
          myInventoryArray.splice(index, 1);
        }
        break;
      case "Combine Items":
        let combineItem = item.split(":");
        let itemToCompare = combineItem[0];
        let newItem = combineItem[1];

        if (myInventoryArray.includes(itemToCompare)) {
          index = myInventoryArray.indexOf(itemToCompare);
          myInventoryArray.splice(index + 1, 0, newItem);
        }
        break;
      case "Renew":
        if (isAlreadyExist) {
          let renewItem = myInventoryArray.splice(index, 1).join("");
          myInventoryArray.push(renewItem);
          
        }
        break;
    }
  }
  console.log(myInventoryArray.join(', '));
}
inventory([
  'Iron, Wood, Sword', 
  'Collect - Gold', 
  'Drop - Wood', 
  'Craft!'
]
);
