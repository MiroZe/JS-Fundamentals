function shoppingList(arr) {
  let myStartShoppingList = arr[0].split("!");

  for (let i = 1; i < arr.length - 1; i++) {
    let current = arr[i].split(" ");
    let command = current[0];
    let product = current[1];
    let isExist = myStartShoppingList.includes(product);
    let indexOfProduct = myStartShoppingList.indexOf(product);

    switch (command) {
      case "Urgent":
        if (!isExist) {
          myStartShoppingList.unshift(product);
        }
        break;
      case "Unnecessary":
        if (indexOfProduct >= 0) {
          myStartShoppingList.splice(indexOfProduct, 1);
        }
        break;

      case "Correct":
        let correctProduct = current[2];
        if (indexOfProduct >= 0) {
          myStartShoppingList.splice(indexOfProduct, 1, correctProduct);
        }
        break;

      case "Rearrange":
        if (indexOfProduct >= 0) {
          let rearanged = myStartShoppingList.splice(indexOfProduct, 1);
          myStartShoppingList.push(rearanged);
        }
        break;
    }
  }
  console.log(myStartShoppingList.join(", "));
}
shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
