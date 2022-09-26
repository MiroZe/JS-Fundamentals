function sumEveneNumbers(arr) {
  let sum = 0;

  for (let el of arr) {
    el = Number(el);
    if (el % 2 === 0) {
      sum += el;
    }
  }
  console.log(sum);
}
sumEveneNumbers(["2", "4", "6", "8", "10"]);
