function addAndRemove(arr) {
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currentCommand = arr[i];
    if (currentCommand === "add") {
      resultArr.push(i + 1);
    } else {
      resultArr.pop();
    }
  }
  if( resultArr.length > 0) {
    console.log(resultArr.join(' '));
  } else {
    console.log('Empty');
  }
  
}
addAndRemove(['remove'])
