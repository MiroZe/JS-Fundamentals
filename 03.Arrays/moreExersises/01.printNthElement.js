function printNthElement(arr) {
  let lastElement = Number(arr.pop());

  let resultArr = [];

  for (let i = 0; i < arr.length; i += lastElement) {
    resultArr.push(arr[i]);
  }

  console.log(resultArr.join(" "));
}
printNthElement(["1", "2", "3", "4", "5", "6"]);
