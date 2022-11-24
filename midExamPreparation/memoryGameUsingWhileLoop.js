function memoryGame(arr) {

    let sequence = arr.shift().split(' ');

    let line = arr.shift();
    let moveCounter = 0;
    let isAllRemoved =  false;

    while(line !== 'end') {
        let [index1, index2] = line.split(' ');
        moveCounter++;
        let middleOfSequence = sequence.length / 2;
        if (index1 === index2 || index1 < 0 || index1 >= sequence.length ||
            index2 < 0 || index2 >= sequence.length) {
            let elementToInsert1 = `-${moveCounter}a`
            let elementToInsert2 = elementToInsert1
            console.log('Invalid input! Adding additional elements to the board')
            sequence.splice(middleOfSequence,0,elementToInsert1,elementToInsert2);
        } else {

            if (sequence[index1] === sequence[index2] ) {
                console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`);
                sequence.splice(Math.max(index1,index2),1);
                sequence.splice(Math.min(index1,index2),1);


            } else {
                console.log('Try again!')
            }


        }
        if(sequence.length <=0) {
            isAllRemoved = true;
            break;
        }
        line = arr.shift()
    }
if(isAllRemoved) {
    console.log(`You have won in ${moveCounter} turns!`)
} else {
    console.log(`Sorry you lose :(\n${sequence.join(' ')}`)
}

}
memoryGame([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    

)