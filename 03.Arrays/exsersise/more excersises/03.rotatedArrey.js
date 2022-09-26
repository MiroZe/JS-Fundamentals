function rotatedArray(arr) {
  let rotation = Number(arr[arr.length - 1]);
  let rotatedArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    rotatedArr.push(arr[i]);
  }

  for (let i = 0; i < rotation; i++) {
    let lastElement = rotatedArr[rotatedArr.length - 1];
    rotatedArr.pop();
    rotatedArr.unshift(lastElement);
  }
  console.log(rotatedArr.join(' '));
}
rotatedArray(["1", "2", "3", "4", "2"]);
