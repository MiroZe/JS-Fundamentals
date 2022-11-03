function sumOfEvenNumbers(arr) {
  let sum = 0;

  for (let elem of arr) {
    let currentEl = Number(elem);

    if (currentEl % 2 === 0) {
      sum += currentEl;
    }
  }
  console.log(sum);
}
sumOfEvenNumbers(["2", "4", "6", "8", "10"]);
