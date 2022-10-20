function memoryGame(arr) {

    let sequenceArray = arr.shift().split(' ')
    let movesCounter = 0;
    let isAllRemoved = false;
    let lastCommand = arr.pop();
    
    for(let i = 0; i < arr.length; i++) {
        movesCounter++;

        let [index1, index2] = arr[i].split(' ').map(Number);
        let element1 = sequenceArray[index1];
        let element2 = sequenceArray[index2]
        if(index1 < 0 || index1 >= sequenceArray.length ||index2 < 0 
            || index2 >= sequenceArray.length
            || index1 === index2) {
                elementsToAdd = `-${movesCounter}a`
                sequenceArray.splice((sequenceArray.length /2),0,elementsToAdd,elementsToAdd)
            console.log('Invalid input! Adding additional elements to the board');
        } else {
            if(sequenceArray[index1] === sequenceArray[index2]) {
            
            
                sequenceArray.splice(Math.max(index1,index2),1);
                sequenceArray.splice(Math.min(index1,index2),1);
               console.log(`Congrats! You have found matching elements - ${element1}!`);
   
           }
           else {
               console.log(`Try again!`);
           }
        }
        
        let sequenceArrayL = sequenceArray.length
        if(sequenceArrayL <= 0) {
            console.log(`You have won in ${movesCounter} turns!`);
            isAllRemoved = true;
            break;

    }
        
    }
    
   if(!isAllRemoved) {
    (console.log(`Sorry you lose :(\n ${sequenceArray.join(' ')} `))   
}
}
memoryGame( [
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    
    
    
)
    