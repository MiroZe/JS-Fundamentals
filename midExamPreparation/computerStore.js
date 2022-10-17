function computerStore(arr) {
  const taxes = 0.2;
  let priceWithoutTaxes = 0;
  let clientType = arr[arr.length - 1];
  let isValidOrder = true;

  for (let i = 0; i < arr.length - 1; i++) {
    let currentPrice = Number(arr[i]);
    if (currentPrice < 0) {
      console.log("Invalid price!");
    } else {
      priceWithoutTaxes += currentPrice;
    }
  }
  let priceWithTaxes = priceWithoutTaxes * 1.2;
  let totalTaxes = priceWithoutTaxes * taxes;

  if (clientType === "special") {
    priceWithTaxes *= 0.9;
  }
  if (priceWithTaxes === 0) {
    console.log("Invalid order!");
    isValidOrder = false;
  }
  if (isValidOrder) {
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${totalTaxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${priceWithTaxes.toFixed(2)}$`);
  }
}
computerStore([
  "1023",
  "15",
  "-20",
  "-5.50",
  "450",
  "20",
  "17.66",
  "19.30",
  "regular",
]);
