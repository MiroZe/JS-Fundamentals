function order(product, quantity) {
  let coffePrice = 1.5;
  let waterPrice = 1;
  let cokePrice = 1.4;
  let snacksPrice = 2;
  let totalPrice = 0;

  switch (product) {
    case "water":
      totalPrice = waterPrice * quantity;
      break;
    case "coke":
      totalPrice = cokePrice * quantity;
      break;
    case "coffee":
      totalPrice = coffePrice * quantity;
      break;
    case "snacks":
      totalPrice = snacksPrice * quantity;
      break;
  }
  return totalPrice.toFixed(2);
}
console.log(order('water',5));

