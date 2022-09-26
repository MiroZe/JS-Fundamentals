function reverseInPlace(arr) {
  

  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    let previousIndex = arr.length - 1 - i;
    arr[i] = arr[previousIndex];
    arr[previousIndex] = temp

  }
  console.log(arr.join(' '));
  
}
reverseInPlace(["33", "123", "0", "dd"]);
