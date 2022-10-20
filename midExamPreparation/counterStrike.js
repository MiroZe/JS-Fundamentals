function counterStrike(input) {

    let energy = Number(input.shift());
    let winCounter = 0;
    let distance = input.shift();
    let isAllBattlesWin = true;
    
    while(distance !== 'End of battle') {
        distance = Number(distance);
        if(energy < distance) {
            console.log(`Not enough energy! Game ends with ${winCounter} won battles and ${energy} energy`);
            isAllBattlesWin = false;
            break;
        } else {
            energy -= distance;
            winCounter++;
            if(winCounter % 3 === 0) {
                energy += winCounter;
            }
    
        }
        distance = input.shift()
    }
    if(isAllBattlesWin) {
        console.log(`Won battles: ${winCounter}. Energy left: ${energy}`)
    }
    
    }
    counterStrike(["100",
        "10",
        "10",
        "10",
        "1",
        "2",
        "3",
        "73",
        "10"])
    
    
    
    
    
    
    