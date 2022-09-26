function mergeArrays(arr1, arr2) {
  let arr3 = [];

  for (let i = 0; i < arr1.length; i++) {
    
    if (i % 2 === 0) {
        let arr1Num = Number(arr1[i]);
        let arr2Num = Number(arr2[i]);
      arr3.push(arr1Num + arr2Num);
    } else {
      arr3.push(arr1[i]+arr2[i]);
    }
  }

  console.log(arr3.join(" - "));
}

mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']

);
