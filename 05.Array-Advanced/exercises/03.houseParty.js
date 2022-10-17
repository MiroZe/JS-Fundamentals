function houseParty(arr) {
  let guestList = [];

  for (let i = 0; i < arr.length; i++) {
    let currentRow = arr[i].split(" ");

    let name = currentRow[0];
    if (!currentRow.includes("not")) {
      if (guestList.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        guestList.push(name);
      }
    } else {
      if (guestList.includes(name)) {
        let index = guestList.indexOf(name);
        guestList.splice(index, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  guestList.forEach((element) => {
    console.log(element);
  });
}
houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
