function dungeonestDark(input) {
  let health = 100;
  let coins = 0;
  let newInput = input[0].split("|");
  let isHeroDead = false;
  let roomCounter = 0;

  for (let i = 0; i < newInput.length; i++) {
    let insideArr = newInput[i].split(" ");
    let word = insideArr[0];
    let value = Number(insideArr[1]);
    switch (word) {
      case "potion":
        if (health + value > 100) {
          value = 100 - health;
          health = 100;
        } else {
          health += value;
        }
        console.log(`You healed for ${value} hp.`);
        console.log(`Current health: ${health} hp.`);
        roomCounter++;
        break;
      case "chest":
        coins += value;
        console.log(`You found ${value} coins.`);
        roomCounter++;
        break;
      default:
        health -= value;
        if (health > 0) {
          console.log(`You slayed ${word}.`);
          roomCounter++;
        } else {
          roomCounter++;
          console.log(`You died! Killed by ${word}.`);
          console.log(`Best room: ${roomCounter}`);
          isHeroDead = true;
          break;
        }
        break;
    }
    if (isHeroDead === true) {
      break;
    }
  }
  if (isHeroDead === false) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
