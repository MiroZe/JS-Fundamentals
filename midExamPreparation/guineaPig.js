function guineaPig(input) {
  let quantityOfFoods = Number(input[0]);
  let quantityOFFoodsInGrams = quantityOfFoods * 1000;
  let hayInGrams = Number(input[1]) * 1000;
  let coverInGrams = Number(input[2]) * 1000;
  let pigWeightInGrams = Number(input[3]) * 1000;
  let isAllEnough = true;

  for (let i = 1; i <= 30; i++) {
    let currentDay = i;
    quantityOFFoodsInGrams -= 300;
    if (currentDay % 2 === 0) {
      hayInGrams -= quantityOFFoodsInGrams * 0.05;
    }
    if (currentDay % 3 === 0) {
      coverInGrams -= pigWeightInGrams / 3;
    }
    if (quantityOFFoodsInGrams <= 0 || hayInGrams <= 0 || coverInGrams <= 0) {
      console.log("Merry must go to the pet store!");
      isAllEnough = false;
      break;
    }
  }
  if (isAllEnough) {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${(
        quantityOFFoodsInGrams / 1000
      ).toFixed(2)}, Hay: ${(hayInGrams / 1000).toFixed(2)}, Cover: ${(
        coverInGrams / 1000
      ).toFixed(2)}.`
    );
  }
}
guineaPig(["10", "5", "5.2", "1"]);
