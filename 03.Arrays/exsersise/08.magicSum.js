function magicSum(array, targetNumber) {
  let targetArr = [];
  let arrL = array.length;
  let pairs = "";

  for (let i = 0; i < arrL; i++) {
    for (let m = i + 1; m < arrL; m++) {
      if (array[i] + array[m] === targetNumber) {
        pairs = `${array[i]} ${array[m]}`;
        targetArr.push(pairs);
      }
    }
  }

  console.log(targetArr.join("\n"));
}
magicSum([1, 7, 6, 2, 19, 23], 8);
