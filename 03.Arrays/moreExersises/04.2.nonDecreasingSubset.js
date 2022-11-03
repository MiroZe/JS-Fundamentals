function nonDecreasingSubset(arr) {
    let newArr = [];
    let firstElement = arr[0];
    newArr.push(firstElement);
  
    for (let i = 1; i < arr.length; i++) {
      let currentEl = arr[i];
  
      if (currentEl < firstElement) {
        continue;
      } else {
        firstElement = currentEl;
        newArr.push(currentEl);
      }
    }
    console.log(newArr.join(" "));
  }
  nonDecreasingSubset([20, 15, 5, 8, 9, 11, 1, 7]);