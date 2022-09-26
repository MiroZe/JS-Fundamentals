function maxSequence(array) {
  let longestSeq = [];
  let arrL = array.length;

  for (let i = 0; i < arrL; i++) {
    let currentArr = [];

    for (let m = i; m < arrL; m++) {
      if (array[i] === array[m]) {
        currentArr.push(array[i]);
      } else {
        break;
      }
    }
    if (currentArr.length > longestSeq.length) {
      longestSeq = currentArr;
    }
  }
  console.log(longestSeq.join(" "));
}
maxSequence([4, 4, 4, 4]);
