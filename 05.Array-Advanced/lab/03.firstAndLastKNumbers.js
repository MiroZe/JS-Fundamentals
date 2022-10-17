function firstAndLastKNumbers(arr) {
  let counter = arr.shift();

  let firstKNumbers = arr.slice(0, counter).join(" ");
  let secondKNumbers = arr.slice(arr.length - counter).join(" ");
  console.log(firstKNumbers);
  console.log(secondKNumbers);
}
firstAndLastKNumbers([3, 6, 7, 8, 9]);
