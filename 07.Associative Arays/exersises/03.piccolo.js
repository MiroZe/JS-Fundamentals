function piccolo(input) {
  let parking = {};
  for (let line of input) {
    let [direction, carNumber] = line.split(", ");
    parking[carNumber] = direction;

    if (parking[carNumber] === "OUT") {
      delete parking[carNumber];
    }
  }

  let parkingStatus = Object.keys(parking).sort((a, b) => a.localeCompare(b));

  if (parkingStatus.length > 0) {
    for (car of parkingStatus) {
      console.log(car);
    }
  } else {
    console.log("Parking Lot is Empty");
  }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);
