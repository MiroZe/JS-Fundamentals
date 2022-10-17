function listOfProducts(arr) {
  let sortedByName = arr.sort();

  for (let i = 0; i < sortedByName.length; i++) {
    console.log(`${i+1}.${arr[i]}`);
  }
}
listOfProducts(['onion', 'orange'])