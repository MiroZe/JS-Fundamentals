function shootForTheWin ( input) {

    let targetsStatus = input.shift().split(' ').map(x => Number(x));

    let index = input.shift();
    let shootedTargetsCounter = 0;
    

    while(index !== 'End') {
        index = Number(index);
        let element = targetsStatus[index]
        if( targetsStatus[index] !== -1) {
            if (index >=0 && index < targetsStatus.length) {
                shootedTargetsCounter++;
                for(let i = 0; i < targetsStatus.length; i++) {
                    if(targetsStatus[i] === -1) {
                        continue;
                    }
                    if( targetsStatus[i] > element) {
                        targetsStatus[i] -= element;
                    } else {
                        targetsStatus[i] += element;
                    }

                }
                targetsStatus[index] = -1;
        }
        }
        
        index = input.shift();
    }
console.log(`Shot targets: ${shootedTargetsCounter} -> ${targetsStatus.join(' ')}`);

}
shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])

