function garage(input) {
  let myGarage = {};

  for (line of input) {
    let [garageNumber, carSpec] = line.split(" - ");

    if (!myGarage[garageNumber]) {
      myGarage[garageNumber] = [];
    }
    myGarage[garageNumber].push(carSpec);
  }
  let arrayOfMyGarage = Object.entries(myGarage);
  arrayOfMyGarage.forEach((element) => {
    let garageNumber = element[0];
    let specs = element[1];
    console.log(`Garage № ${garageNumber}`);
    for (words of specs) {
        
      while(words.includes(': ')) {
        words = words.replace(': ',' - ');

      }
      console.log(`--- ${words}`);

    }
  });
}
garage(['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol']
);
