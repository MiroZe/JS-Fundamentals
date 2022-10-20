function heartDelievery(arr) {
   
    let neededHeartsForHouse = arr.shift().split('@').map(Number)
    let length = 0;
    let isSuccessful = true;

    for (let index = 0; index < arr.length - 1; index++) {

        let currentLine = arr[index].split(' ');
        let currentLength = Number(currentLine[1]);

        length += currentLength;
        if (length >= neededHeartsForHouse.length) {
            length = 0;
        }
        if (neededHeartsForHouse[length] === 0) {
            console.log(`Place ${length} already had Valentine's day.`);
        } else {

            neededHeartsForHouse[length] -= 2;
            if (neededHeartsForHouse[length] === 0) {
                console.log(`Place ${length} has Valentine's day.`);
            }
        }
    }
    console.log(`Cupid's last position was ${length}.`);

        let count = 0;

    for (let  elements  of neededHeartsForHouse) {
        if (elements !== 0) {
            isSuccessful = false;
            count++;
        }
    }

    if (isSuccessful) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${count} places.`);
    }
}
heartDelievery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"])


