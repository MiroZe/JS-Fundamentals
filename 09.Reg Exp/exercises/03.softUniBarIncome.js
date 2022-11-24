function barIncome(input) {
  let pattern =
    /\%(?<customer>[A-Z][a-z]+)\%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<quantity>\d+)\|[^|$%.]*?(?<price>\d+(\.\d+)?)\$/g;
  let line = input.shift();
  let totalIncome = 0;

  while (line !== "end of shift") {
    let matches = line.matchAll(pattern);
    for (let match of matches) {
      let name = match.groups.customer;
      let product = match.groups.product;
      let totalPrice =
        Number(match.groups.quantity) * Number(match.groups.price);
      totalIncome += totalPrice;
      console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
    }

    line = input.shift();
  }

  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
barIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
);
