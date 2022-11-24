function needForSpeed(input) {
  let numberOfCars = Number(input.shift());
  let carsObj = {};

  for (let i = 0; i < numberOfCars; i++) {
    let [carModel, distance, fuelAvailability] = input[i].split("|");
    distance = Number(distance);
    fuelAvailability = Number(fuelAvailability);

    carsObj[carModel] = { distance, fuelAvailability };
  }

  input = input.slice(numberOfCars);
  let line = input.shift();

  while (line !== "Stop") {
    let [command, car, value, value2] = line.split(" : ");

    switch (command) {
      case "Drive":
        let driveDistance = Number(value);
        let fuel = Number(value2);
        if (carsObj[car].fuelAvailability < fuel) {
          console.log("Not enough fuel to make that ride");
        } else {
          carsObj[car].fuelAvailability -= fuel;
          carsObj[car].distance += driveDistance;
          console.log(
            `${car} driven for ${driveDistance} kilometers. ${fuel} liters of fuel consumed.`
          );
        }
        if (carsObj[car].distance > 100000) {
          console.log(`Time to sell the ${car}!`);
          delete carsObj[car];
        }
        break;

      case "Refuel":
        let refuelinLtrs = Number(value);
        let maxCapacity = 75;

        if (refuelinLtrs + carsObj[car].fuelAvailability > maxCapacity) {         
          let diff = maxCapacity - carsObj[car].fuelAvailability;
          console.log(`${car} refueled with ${diff} liters`);
          carsObj[car].fuelAvailability = maxCapacity;
        } else {
          carsObj[car].fuelAvailability += refuelinLtrs;
          console.log(`${car} refueled with ${refuelinLtrs} liters`);
        }
        break;
      case "Revert":
        let revertKm = Number(value);
        if (carsObj[car].distance - revertKm >= 10000) {
          carsObj[car].distance -= revertKm;
          console.log(`${car} mileage decreased by ${revertKm} kilometers`);
        } else {
          carsObj[car].distance = 10000;
        }
        break;
    }

    line = input.shift();
  }
  for (key in carsObj) {
    console.log(
      `${key} -> Mileage: ${carsObj[key].distance} kms, Fuel in the tank: ${carsObj[key].fuelAvailability} lt.`
    );
  }
}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  );
