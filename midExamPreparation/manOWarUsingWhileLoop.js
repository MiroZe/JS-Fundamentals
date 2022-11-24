function manOWar (input) {
    let pirateShip =  input.shift().split('>').map(x => Number(x));
    let warShip = input.shift().split('>').map(x => Number(x));
    let maximumHealth = Number(input.shift());

    let line = input.shift();

    while(line !== 'Retire') {
        let commandLine = line.split(' ') ;
        let command = commandLine[0];

        switch(command) {
            case 'Fire' :
                let fireIndex = Number(commandLine[1]);
                let fireDamage = Number(commandLine[2]);
                if(fireIndex >=0 && fireIndex < pirateShip.length) {
                    warShip[fireIndex] -= fireDamage;
                    if(warShip[fireIndex] <= 0 ) {
                        console.log('You won! The enemy ship has sunken.');
                        return;
                    }
                }
                break;

            case 'Defend' :
                let defendStartIndex = Number(commandLine[1]);
                let defendEndIndex = Number(commandLine[2]);
                let damage = Number(commandLine[3]);
                if(defendEndIndex >= 0 && defendEndIndex < pirateShip.length &&
                    defendStartIndex >=0 && defendStartIndex < pirateShip.length) {
                    for( let i = defendStartIndex; i <= defendEndIndex;i++) {
                        pirateShip[i] -= damage;
                        if(pirateShip[i] <= 0) {
                            console.log('You lost! The pirate ship has sunken.');
                            return;
                        }
                    }

                }
                break;
            case 'Repair' :
                let repairIndex = Number(commandLine[1]);
                let repairHealth = Number(commandLine[2]);

                if(repairIndex >= 0 && repairIndex < pirateShip.length) {
                    pirateShip[repairIndex] += repairHealth;
                    if( pirateShip[repairIndex] > maximumHealth) {
                        pirateShip[repairIndex] = maximumHealth;
                    }
                }
                break;
            case 'Status' :
                let repairCounter = 0;
                let targetForRepairing = maximumHealth * 0.2;
                for(const sectors of pirateShip) {
                    if(sectors < targetForRepairing) {
                        repairCounter++;
                    }
                }
                console.log(`${repairCounter} sections need repair.`)
                break;


        }

        line = input.shift()
    }

    let sumOfShips = function(array) {
        let sum  = 0;
        array.forEach(element => sum += element);
        return sum;
    }
    console.log(`Pirate ship status: ${sumOfShips(pirateShip)} \nWarship status: ${sumOfShips(warShip)}`);


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
