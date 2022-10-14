function gladiatorExpenses(
  losts,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let counter = 0;
  let shieldCounter = 0;
  let brokenHelmet = 0;
  let brokenSword = 0;
  let brokenArmor = 0;

  for (let i = 1; i <= losts; i++) {
    counter++;
    if (counter % 2 === 0) {
      brokenHelmet++;
    }
    if (counter % 3 === 0) {
      brokenSword++;
    }
    if (counter % 6 === 0) {
      shieldCounter++;
      if (shieldCounter % 2 === 0) {
        brokenArmor++;
      }
    }
  }
  cost =
    brokenHelmet * helmetPrice +
    brokenSword * swordPrice +
    shieldCounter * shieldPrice +
    brokenArmor * armorPrice;
  console.log(`Gladiator expenses: ${cost.toFixed(2)} aureus`);
}
gladiatorExpenses(7,    2,    3,    4,    5    );
