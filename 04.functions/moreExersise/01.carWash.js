function carWash(arr) {
  let value = 0;
  let arrL = arr.length;
  for (let i = 0; i < arrL; i++) {
    let currentCommand = arr[i];

    switch (currentCommand) {
      case "soap": value += 10; break;
      case "water": value *= 1.2; break;
      case "vacuum cleaner": value *= 1.25; break;
      case "mud": value *= 0.9; break;
    }
  }
  console.log(`The car is ${value.toFixed(2)}% clean.`);
}
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);

