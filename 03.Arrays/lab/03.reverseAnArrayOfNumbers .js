function reverseAnArrayOfNumbers(n, numbers) {
  let newArr = [];
  for (let i = n - 1; i >= 0; i--) {
    newArr.push(numbers[i]);
  }

  console.log(newArr.join(" "));
}
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
