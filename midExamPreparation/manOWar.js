function manOWar(arr) {
  let myShipState = arr[0].split(">").map(Number);
  let enemyShip = arr[1].split(">").map(Number);
  let myShipMaxHealth = Number(arr[2]);
  let isEnemyShipSink = false;
  let isMyShipSink = false;

  for (let i = 3; i < arr.length - 1; i++) {
    let currentActions = arr[i].split(" ");
    let command = currentActions[0];

    switch (command) {
      case "Fire":
        let index = Number(currentActions[1]);
        let attackDamage = Number(currentActions[2]);
        let targetOfEnemy = enemyShip[index];

        if (index >= 0 && index <= enemyShip.length - 1) {
          targetOfEnemy -= attackDamage;
          enemyShip[index] = targetOfEnemy;
          if (targetOfEnemy <= 0) {
            isEnemyShipSink = true;
            console.log("You won! The enemy ship has sunken.");
            break;
          }
        }
        break;
      case "Defend":
        let startIndex = Number(currentActions[1]);
        let endIndex = Number(currentActions[2]);
        let damage = Number(currentActions[3]);
        if (
          startIndex >= 0 &&
          startIndex <= myShipState.length - 1 &&
          endIndex >= 0 &&
          endIndex <= myShipState.length - 1
        ) {
          for (let m = startIndex; m <= endIndex; m++) {
            
            let targetSections = myShipState[m];
            targetSections -= damage;
            myShipState[m] = targetSections;
            if (targetSections <= 0) {
              console.log("You lost! The pirate ship has sunken.");
              isMyShipSink = true;
              break;
            }
          }
        }
        break;
      case "Repair":
        let repairIndex = Number(currentActions[1]);
        let healthToAdd = Number(currentActions[2]);
        let sectionToRepair = myShipState[repairIndex];

        if (repairIndex >= 0 && repairIndex <= myShipState.length - 1) {
          sectionToRepair += healthToAdd;
          if (sectionToRepair > myShipMaxHealth) {
            sectionToRepair = myShipMaxHealth;
          }
          myShipState[repairIndex] = sectionToRepair;
        }
        break;
      case "Status":
        let counter = 0;
        for (let i = 0; i < myShipState.length; i++) {
          let currentElement = Number(myShipState[i]);
          let target = myShipMaxHealth * 0.2;
          if (currentElement < target) {
            counter++;
          }
        }
        console.log(`${counter} sections need repair.`);
        break;
    }
    if (isEnemyShipSink === true) {
      break;
    }
    if (isMyShipSink === true) {
      break;
    }
  }
  let sumOfMyShipSectors = 0;
  let sumOfEnemyShipSectors = 0;
  for (let elements of myShipState) {
    sumOfMyShipSectors += elements;
  }
  for (let elements of enemyShip) {
    sumOfEnemyShipSectors += elements;
  }
  if (isMyShipSink === false && isEnemyShipSink === false) {
    console.log(`Pirate ship status: ${sumOfMyShipSectors}`);
    console.log(`Warship status: ${sumOfEnemyShipSectors}`);
  }
}
manOWar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])

