function districtArray(arrOfElements) {
  let result = [];

  for (let i = 0; i < arrOfElements.length; i++) {
    let currentNumber = arrOfElements[i];
    if (!result.includes(currentNumber)) {
      result.push(currentNumber);
    }
  }

  console.log(result.join(" "));
}
districtArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
