function radioCrystals(arr) {
  let target = arr[0];
  let currentCrystal = 0;
  let printLine = function () {
    return console.log("Transporting and washing");
  };

  for (let i = 1; i < arr.length; i++) {
    currentCrystal = arr[i];
    let cutCounter = 0;
    let lapCounter = 0;
    let grindCounter = 0;
    let etchCounter = 0;
    let xRayCounter = 0;

    console.log(`Processing chunk ${currentCrystal} microns`);

    let cut = function (currentCrystal) {
      return Math.floor(currentCrystal / 4);
    };
    let lap = function (currentCrystal) {
      return currentCrystal * 0.8;
    };
    let grind = function (currentCrystal) {
      return Math.floor((currentCrystal -= 20));
    };
    let etch = function (currentCrystal) {
      return Math.floor((currentCrystal -= 2));
    };
    let xRay = function (currentCrystal) {
      return (currentCrystal += 1);
    };

    while (cut(currentCrystal) >= target) {
      currentCrystal = cut(currentCrystal);
      cutCounter++;
    }

    if (cutCounter > 0) {
      console.log(`Cut x${cutCounter}`);
      printLine();
    }

    while (lap(currentCrystal) >= target) {
      currentCrystal = lap(currentCrystal);
      lapCounter++;
    }
    if (lapCounter > 0) {
      console.log(`Lap x${lapCounter}`);
      printLine();
    }

    while (grind(currentCrystal) >= target) {
      currentCrystal = grind(currentCrystal);
      grindCounter++;
    }
    if (grindCounter > 0) {
      console.log(`Grind x${grindCounter}`);
      printLine();
    }

    while (etch(currentCrystal) >= target - 1) {
      currentCrystal = etch(currentCrystal);
      etchCounter++;
    }

    if (etchCounter > 0) {
      console.log(`Etch x${etchCounter}`);
      printLine();
    }

    if (currentCrystal < target) {
      currentCrystal = xRay(currentCrystal);

      console.log(`X-ray x1`);     
    }
    console.log(`Finished crystal ${currentCrystal} microns`);
  }
}
radioCrystals([1000, 4000, 8100]);
