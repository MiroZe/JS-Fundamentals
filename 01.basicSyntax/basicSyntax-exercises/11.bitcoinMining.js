function bitcoinMining(input) {
  let index = 0;
  let sumOfGold = 0;
  let sumOfLv = 0;
  let oneBitcoin = 11949.16;
  let bitcoinCounter = 0;
  let dayCounter = 0;
  let firstDay = 0;
  let isBoughtBitcoin = false;
  let firstBitcoin = 0;

  for (let i = 0; i < input.length; i++) {
    let currentMining = Number(input[index]);
    index++;
    dayCounter++;
    if (dayCounter % 3 === 0) {
      currentMining *= 0.7;
    }
    sumOfGold += currentMining;
    let currentLv = currentMining * 67.51;
    sumOfLv += currentLv;
    if (sumOfLv >= oneBitcoin) {
      let currentBitcoin = 0;
      currentBitcoin = Math.floor(sumOfLv / oneBitcoin);
      bitcoinCounter += currentBitcoin;
      sumOfLv -= currentBitcoin * oneBitcoin;
      isBoughtBitcoin = true;

      firstBitcoin++;
    }
    if (firstBitcoin === 1) {
      firstDay = dayCounter;
    }
  }

  console.log(`Bought bitcoins: ${Math.floor(bitcoinCounter)}`);
  if (isBoughtBitcoin) {
    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
  }

  console.log(`Left money: ${sumOfLv.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);
