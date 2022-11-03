function commonElemenst(arr1, arr2) {
  for (let firstEl of arr1) {
    for (let secondEl of arr2) {
      if (firstEl === secondEl) {
        console.log(firstEl);
      }
    }
  }
}
commonElemenst(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
