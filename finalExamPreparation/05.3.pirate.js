function pirates(input) {

    let targetCities = {};
    let line = input.shift();
    while (line !== 'Sail') {
        let currentLine = line.split('||');
        let cityName = currentLine.shift();
        let population = Number(currentLine[0]);
        let gold = Number(currentLine[1]);

        if (!targetCities[cityName]) {
            targetCities[cityName] = [];
        } else {
            let populationToAdd = targetCities[cityName].shift();
            let goldToAdd = targetCities[cityName].shift();
            population += populationToAdd;
            gold += goldToAdd;

        }

        targetCities[cityName].push(population);
        targetCities[cityName].push(gold);
        line = input.shift();
    }
    line = input.shift();
    while (line !== 'End') {
        let actions = line.split('=>');
        let command = actions[0];
        let targetCity = actions[1];

        let currentLine = targetCities[targetCity];
        let totalPopulation = Number(currentLine[0]);
        let totalGold = Number(currentLine[1]);
        switch (command) {
            case 'Plunder':
                let attackedPeople = Number(actions[2]);
                let stolenGold = Number(actions[3])

                totalPopulation -= attackedPeople;
                totalGold -= stolenGold;

                if (totalGold <= 0 || totalPopulation <= 0) {
                    console.log(`${targetCity} plundered! ${stolenGold} gold stolen, ${attackedPeople} citizens killed.`)
                    delete targetCities[targetCity];
                    console.log(`${targetCity} has been wiped off the map!`);
                    break;
                } else {
                    console.log(`${targetCity} plundered! ${stolenGold} gold stolen, ${attackedPeople} citizens killed.`)
                }
                targetCities[targetCity] = [totalPopulation, totalGold];
                break;
            case 'Prosper':
                let recievedGold = Number(actions[2])
                if (recievedGold < 0) {
                    console.log('Gold added cannot be a negative number!');
                } else {
                    totalGold += recievedGold;
                    targetCities[targetCity] = [totalPopulation, totalGold];
                    console.log(`${recievedGold} gold added to the city treasury. ${targetCity} now has ${totalGold} gold.`)
                }
                break;
        }

        line = input.shift();
    }

    let arrayOfCities = Object.entries(targetCities);

    let counter = arrayOfCities.length;
    if (counter > 0) {
        console.log(`Ahoy, Captain! There are ${counter} wealthy settlements to go to:`)
        for (element of arrayOfCities) {
            console.log(`${element[0]} -> Population: ${element[1][0]} citizens, Gold: ${element[1][1]} kg`)
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }

}
pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])


