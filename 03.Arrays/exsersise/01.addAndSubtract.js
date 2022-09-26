function addAndSubtract(arr) {
  let modArray = [];
  let arrSum = 0;
  let modArraySum = 0;
  for (let element of arr) {
    modArray.push(element);
    arrSum += element;
  }
  for (let i = 0; i < modArray.length; i++) {
    if (modArray[i] % 2 === 0) {
      modArray[i] = modArray[i] + i;
    } else {
      modArray[i] = modArray[i] - i;
    }
    modArraySum += modArray[i];
  }
  console.log(modArray);
  console.log(arrSum);
  console.log(modArraySum);
}
addAndSubtract([5, 15, 23, 56, 35]);
