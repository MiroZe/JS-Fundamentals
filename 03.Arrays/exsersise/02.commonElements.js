function commonEllements(arr1, arr2) {
  for (let elements of arr1) {
    if (arr2.includes(elements)) {
      console.log(elements);
    }
  }
}
commonEllements(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
    
);
