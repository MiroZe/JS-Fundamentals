function heroes(input) {
    let numberOfHeroes = Number(input.shift());
    let heroes = {};
    let maxHP = 100;
    let maxMP = 200;

    for (let i = 0; i < numberOfHeroes; i++) {
        let [heroName, healPower, manaPower] = input[i].split(" ");
        healPower = Number(healPower);
        manaPower = Number(manaPower);
        heroes[heroName] = { healPower, manaPower };
    }
    input = input.splice(numberOfHeroes);
    let line = input.shift();
    while (line !== "End") {
        let [command, heroName, value, nameForAction] = line.split(" - ");

        switch (command) {
            case "CastSpell":
                let neededMP = Number(value);
                let spellName = nameForAction
                if (heroes[heroName].manaPower >= neededMP) {
                    heroes[heroName].manaPower -= neededMP;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].manaPower} MP!`);

                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
                break;
            case "TakeDamage":
                let damage = Number(value);
                heroes[heroName].healPower -= damage;
                if (heroes[heroName].healPower <= 0) {
                    console.log(`${heroName} has been killed by ${nameForAction}!`);
                    delete heroes[heroName];
                } else {
                    console.log(`${heroName} was hit for ${damage} HP by ${nameForAction} and now has ${heroes[heroName].healPower} HP left!`);
                }
                break;
            case "Recharge":
                let reachargeMPValue = Number(value);
                let diffMP = (maxMP - heroes[heroName].manaPower)
                heroes[heroName].manaPower += reachargeMPValue;

                if (heroes[heroName].manaPower > maxMP) {
                    heroes[heroName].manaPower = maxMP;
                    console.log(`${heroName} recharged for ${diffMP} MP!`);
                } else {
                    console.log(`${heroName} recharged for ${reachargeMPValue} MP!`)
                }
                break;

            case "Heal":
                let reachargeHpValue = Number(value);
                let diffHP = (maxHP - heroes[heroName].healPower)
                heroes[heroName].healPower += reachargeHpValue;

                if (heroes[heroName].healPower > maxHP) {

                    heroes[heroName].healPower = maxHP;
                    console.log(`${heroName} healed for ${diffHP} HP!`);
                } else {
                    console.log(`${heroName} healed for ${reachargeHpValue} HP!`)
                }
                break;

        }

        line = input.shift();

    }

    for (key in heroes) {
        console.log(`${key}\n HP: ${heroes[key].healPower}\n MP: ${heroes[key].manaPower}`);
    };

}