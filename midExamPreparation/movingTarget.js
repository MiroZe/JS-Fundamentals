function movingTarget(input) {

    let targets = input.shift().split(' ').map(Number);
   
    let commandLine = input.shift();

    while(commandLine !== 'End') {
        let currentLine = commandLine.split(' ')
        let command = currentLine[0];
        let  index = Number(currentLine[1]);
         switch(command) {
            case 'Shoot' :
                let power = Number(currentLine[2]);
                if (index >= 0 && index < targets.length) {
                    targets[index] -= power;
                    if ( targets[index] <= 0) {
                        targets.splice(index,1);
                    }
                }
                break;
                
            case 'Add' :
                let value = Number(currentLine[2]);
                if (index >= 0 && index < targets.length) {
                    targets.splice(index,0,value)
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case 'Strike' :
                let radius = Number(currentLine[2]);
                let endLeftIndex = index - radius;
                let endRightIndex = index + radius;
                if( endLeftIndex >=0 && endRightIndex < targets.length && index >=0 && index < targets.length) {
                    targets.splice(endLeftIndex,radius * 2 + 1 )
                } else {
                    console.log('Strike missed!');
                }
                break;
         }
        commandLine = input.shift()
    }
    console.log(targets.join('|'));


}
movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])
