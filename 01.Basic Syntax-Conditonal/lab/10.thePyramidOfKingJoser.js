function pyramid(base, increment) {
  let marble = 0;
  let stone = 0;
  let lapis = 0;
  let gold = 0;
  let levelCounter = 0;

  for (let step = base; step >= 1; step -= 2) {
    levelCounter++;
    let currentStone = (step - 2) * (step - 2) * increment;
    let currentMarble = (step * step - (step - 2) * (step - 2)) * increment;
    if (levelCounter % 5 === 0) {
      currentMarble = 0;
      lapis += (step * step - (step - 2) * (step - 2)) * increment;
    }
    if (step === 1 || step === 2) {
      currentStone = 0;
      currentMarble = 0;
      gold += step * step * increment;
    }
    stone += currentStone;
    marble += currentMarble;
  }
  console.log(`Stone required: ${Math.round(stone)}`);
  console.log(`Marble required: ${Math.round(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.round(lapis)}`);
  console.log(`Gold required: ${Math.round(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(levelCounter * increment)}`);
}

pyramid(11, 1);
