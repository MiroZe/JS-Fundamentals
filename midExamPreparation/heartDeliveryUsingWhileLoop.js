function heartDelivery (arr) {

    let houses = arr.shift().split('@').map(x => Number(x))
    let lastPosition = 0;
    let isHeartsEnough = true;
    let commandLIne = arr.shift();

    while(commandLIne !== 'Love!') {
        let row = commandLIne.split(' ');

        let jumpIndex = Number(row[1]);

        lastPosition += jumpIndex

        if(lastPosition < 0 || lastPosition >= houses.length){
            lastPosition = 0;
        }
        if( houses[lastPosition] === 0) {
            console.log(`Place ${lastPosition} already had Valentine's day.`)
        } else {
            houses[lastPosition] -= 2;
            if(houses[lastPosition] === 0) {
                console.log(`Place ${lastPosition} has Valentine's day.`)
            }
        }

        commandLIne = arr.shift()
    }
    let houseCount = 0;
    console.log(`Cupid's last position was ${lastPosition}.`)
    for(let elements of houses) {
        if (elements > 0) {
            isHeartsEnough = false;
            houseCount++;
        }
    }
    if(isHeartsEnough) {
        console.log(`Mission was successful.`)
    } else {
        console.log(`Cupid has failed ${houseCount} places.`)
    }
}
heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"])

