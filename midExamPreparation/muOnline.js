function muOnline(input) {

    let health = 100;
    let bitCoins = 0;
    let arrOfRooms = input.split('|');
    let arrOfRomsLength = arrOfRooms.length;
    let isDied = false;
    let roomCounter = 0;

    for(let i = 0; i< arrOfRomsLength; i++) {

        let currentCommand = arrOfRooms[i].split(' ');
        let word = currentCommand[0];
        let value = Number(currentCommand[1]);

        switch(word) {
            case 'potion' :
                roomCounter++;
               if( health + value > 100) {
                   let diff = Math.abs((health + value ) - 100 - value);
                    health = 100;
                   console.log(`You healed for ${diff} hp.`);
                   console.log(`Current health: ${health} hp.`);
               } else {
                   health += value;
                   console.log(`You healed for ${value} hp.`);
                   console.log(`Current health: ${health} hp.`);

               } break;

            case 'chest' :
                roomCounter++
                bitCoins += value;
                console.log(`You found ${value} bitcoins.`);
                break;
            default :
                roomCounter++;
                health -= value;
                if(health > 0) {
                    console.log(`You slayed ${word}.`);

                } else {
                    isDied = true;
                    console.log(`You died! Killed by ${word}.`);
                    break;
                }


        }
        if(isDied === true) {
            console.log(`Best room: ${roomCounter}`)
            break;
        }


    }
    if(isDied === false) {
        console.log('You\'ve made it!');
        console.log(`Bitcoins: ${bitCoins}`);
        console.log(`Health: ${health}`)
    }



}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")