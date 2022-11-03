function storeProvision(inStock, ordered) {
  let store = {
    printStore() {
      console.log(`${store.name} -> ${store.quantity}`);
    },
  };

  for (let i = 0; i < ordered.length; i += 2) {
    let currentElement = ordered[i];
    let nextElement = Number(ordered[i + 1]);
    if (inStock.includes(currentElement)) {
      let index = inStock.indexOf(currentElement);
      inStock[index + 1] = Number(inStock[index + 1]);
      inStock[index + 1] += nextElement;
    } else {
      inStock.push(currentElement);
      inStock.push(nextElement);
    }
  }
  for (let i = 0; i < inStock.length; i += 2) {
    let name = inStock[i];
    let quantity = inStock[i + 1];
    store.name = name;
    store.quantity = quantity;
    store.printStore();
  }
}

storeProvision(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);

