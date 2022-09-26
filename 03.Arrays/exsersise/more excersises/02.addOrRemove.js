function addOrRemove(arr) {
  let newArr = [];
  let inputL = arr.length;
  let startNumber = 1;

  for (let i = 0; i < inputL; i++) {
    let currentCommand = arr[i];
    switch (currentCommand) {
      case "add":
        newArr.push(startNumber + i);
        break;
      case "remove":
        newArr.pop();
        break;
    }
  }
  if (newArr.length === 0) {
    console.log("Empty");
  } else {
    console.log(newArr.join(" "));
  }
}
addOrRemove(["1", "add", "add", "add"]);
