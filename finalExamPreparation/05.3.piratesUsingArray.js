function pirates(input) {

    let cities = [];
    let line = input.shift();
    while(line !== 'Sail') {
        let [cityName,population,gold] = line.split('||');
        population = +population;
        gold = Number(gold);
        let result = cities.find((el) => el.cityName === cityName);
        let index = cities.indexOf(result)
        if(!result) {
            cities.push({cityName,population,gold})
        } else {
            cities[index].population += population
            cities[index].gold += gold;
        }
    
    
        line = input.shift();
    }
    
       line = input.shift();
    while ( line !== 'End') {
        let [command,cityName,valueOne,valueTwo] = line.split('=>')
        let result = cities.find((el) => el.cityName === cityName);
        let index = cities.indexOf(result)
    switch(command) {
        case 'Plunder' :
            let people = Number(valueOne);
            let plunderedGold = Number(valueTwo);
            if(result) {
                cities[index].population -= people;
                cities[index].gold -= plunderedGold;
                console.log(`${cityName} plundered! ${plunderedGold} gold stolen, ${people} citizens killed.`)
            }
    
            if(cities[index].population <=0 || cities[index].gold <=0) {
                cities.splice(index,1);
                console.log(`${cityName} has been wiped off the map!`)
            }
            break;
    
        case 'Prosper' :
            let goldToAdd = Number(valueOne);
            if( goldToAdd <0) {
                console.log('Gold added cannot be a negative number!')
            } else {
                cities[index].gold += goldToAdd;
                console.log(`${goldToAdd} gold added to the city treasury. ${cityName} now has ${cities[index].gold} gold.`)
        }
        break;
    }
    
        line = input.shift();
    
    }
    if (cities.length > 0) {
        console.log(`Ahoy, Captain! There are ${cities.length} wealthy settlements to go to:`)
        cities.forEach(el => {
            console.log(`${el.cityName} -> Population: ${el.population} citizens, Gold: ${el.gold} kg`)
        })
    
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!')
    }
    
    }
    pirates(["Tortuga||345000||1250",
        "Santo Domingo||240000||630",
        "Havana||410000||1100",
        "Sail",
        "Plunder=>Tortuga=>75000=>380",
        "Prosper=>Santo Domingo=>180",
        "End"])
    
    